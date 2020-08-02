import resultPegPlugin from "./result-peg.plugin";

function rowResultsPeg(pegs) {
    const row = $("<div>", { class: "row" });
    for (let i = 0; i < pegs.length; i++) {
        row.append(resultPegPlugin.call($("<div>"), pegs[i]));
    }
    return row;
}

const results = function({ wellPlaced = 0, misplaced = 0 }, codeLength) {
    const pegs = new Array(wellPlaced)
        .fill("well-placed")
        .concat(new Array(misplaced).fill("misplaced"));
    pegs.length = codeLength;

    return this.empty()
        .addClass("results")
        .append(
            rowResultsPeg(pegs.splice(0, Math.ceil(codeLength / 2))),
            rowResultsPeg(pegs),
        );
};

export default results;
export { results };
