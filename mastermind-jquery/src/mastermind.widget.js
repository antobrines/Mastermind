import headerPlugin from "./header.plugin";
import codeSelectorPlugin from "./code-selector.plugin";
import { historyPlugin, setRow } from "./history.plugin";
import alertPlugin from "./alert.plugin";
import MastermindKernel from "mastermind-kernel";
import CircularArrangement from "circular-arrangement";

const levels = {
    baby: {
        codeLength: 2,
        colorsNumber: 3,
        duplicateColor: false,
        maxSubmits: 12,
    },
    easy: {
        codeLength: 4,
        colorsNumber: 6,
        duplicateColor: false,
        maxSubmits: 12,
    },
    medium: {
        codeLength: 4,
        colorsNumber: 6,
        duplicateColor: true,
        maxSubmits: 10,
    },
    hard: {
        codeLength: 5,
        colorsNumber: 8,
        duplicateColor: true,
        maxSubmits: 8,
    },
    crazy: {
        codeLength: 6,
        colorsNumber: 10,
        duplicateColor: true,
        maxSubmits: 8,
    },
};

const Mastermind = {
    options: {
        level: "medium",
        levels,
    },

    _create: function() {
        this._kernel = new MastermindKernel();

        this.headerElt = headerPlugin
            .call(
                $("<div>"),
                "Mastermind",
                Object.keys(this.options.levels),
                this.options.level,
            )
            .on("change", e => {
                this.options.level = e.target.value;
                this.newGame();
            });
        this.codeSelectorElt = $("<div>").on("submit", (e, c) => {
            this.submit(c);
        });
        this.historyElt = $("<div>");

        this.element
            .empty()
            .addClass("mastermind")
            .append(this.headerElt, this.historyElt, this.codeSelectorElt);
        this.newGame();
    },

    newGame() {
        const options = this.options.levels[this.options.level];
        this._kernel.setOptions(options);

        this.history = new Array(options.maxSubmits)
            .fill(0)
            .map(() => ({ code: new Array(options.codeLength), results: {} }));
        historyPlugin.call(this.historyElt, this.history);
        this.remainSubmits = options.maxSubmits;
        this.isWon = false;

        options.circularArrangement = new CircularArrangement(
            options.colorsNumber + 1,
        );
        codeSelectorPlugin.call(this.codeSelectorElt, options);
    },

    submit(code) {
        if (this.remainSubmits > 0 && !this.isWon) {
            const results = this._kernel.submit(code),
                row = this.historyElt.children(
                    ".row:nth-child(" + this.remainSubmits + ")",
                ),
                options = this.options.levels[this.options.level];
            this.remainSubmits--;
            setRow(row, code, results);

            if (results.wellPlaced === options.codeLength) {
                this._isWon = true;
                alertPlugin.call(
                    this.element,
                    "Victoire",
                    "Félicitation, vous avez gagné !",
                    () => this.newGame(),
                );
            } else {
                if (this.remainSubmits <= 0) {
                    alertPlugin.call(
                        this.element,
                        "Défaite",
                        "Dommage, vous avez perdu...",
                        () => this.newGame(),
                    );
                }
            }
        }
    },
};

export default Mastermind;
export { Mastermind };
