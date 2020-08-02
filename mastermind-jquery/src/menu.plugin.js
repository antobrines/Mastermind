import colorPegPlugin from "./color-peg.plugin";

const menuPlugin = function(circularArrangement) {
    const pegs = [
            undefined,
            ...Array(circularArrangement.disksNumber - 1).keys(),
        ].map((v, i) =>
            colorPegPlugin.call(
                $("<div>", { css: circularArrangement.coordinates(i) }),
                v,
            ),
        ),
        screen = $("<div>", { class: "screen" }).click(e => {
            $(e.target)
                .parent()
                .empty();
        }),
        menu = $("<div>", { class: "menu-container" })
            .append(pegs)
            .on("click", ".color-peg", e => {
                const t = $(e.target);
                t.trigger("select", [t.attr("value")])
                    .parent()
                    .parent()
                    .empty();
            });
    return this.empty().append(screen, menu);
};

export default menuPlugin;
export { menuPlugin };
