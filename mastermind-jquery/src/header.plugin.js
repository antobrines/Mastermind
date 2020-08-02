import inplaceSelectPlugin from "./inplace-select.plugin";

const headerPlugin = function(title, options, selected) {
    const select = $("<select>");
    options.forEach(name =>
        select.append(
            $("<option>", { text: name, selected: selected === name }),
        ),
    );

    return this.empty()
        .addClass("header")
        .append(
            $("<div>", { class: "title", text: title }),
            inplaceSelectPlugin.call(select),
        );
};

export default headerPlugin;
export { headerPlugin };
