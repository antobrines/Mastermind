import codePlugin from "./code.plugin";
import menuPlugin from "./menu.plugin";

const codeSelector = function({ codeLength, circularArrangement }) {
    function extractCode(codeSelectorElement) {
        return codeSelectorElement
            .find(".color-peg")
            .toArray()
            .map(e => {
                const v = $(e).attr("value");
                return v !== undefined ? parseInt(v) : v;
            });
    }

    const code = codePlugin.call($("<div>"), new Array(codeLength)),
        submit = $("<div>", { class: "submit" }).click(e => {
            const selector = $(e.target).parent();
            selector.trigger("submit", [extractCode(selector)]);
        });

    return this.empty()
        .addClass("code-selector")
        .append(code, submit)
        .on("click", ".code > .color-peg", e => {
            menuPlugin.call($(e.target), circularArrangement);
        })
        .on("select", ".code > .color-peg", (e, v) =>
            $(e.currentTarget).attr("value", v === undefined ? null : v),
        );
};

export default codeSelector;
export { codeSelector };
