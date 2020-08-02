function change(domSelect) {
    $(domSelect)
        .hide()
        .prev()
        .text(domSelect.value);
}

const inplaceSelectPlugin = function() {
    const div = $("<div>", {
        class: "selected",
        click: e =>
            $(e.target)
                .next()
                .show()
                .focus(),
    });

    const container = $("<div>", { class: "inplace-select" })
        .insertAfter(this)
        .append(div, this);

    this.each((i, select) => {
        change(select);
        select.size = select.length;
    })
        .blur(e => $(e.target).hide())
        .change(e => change(e.target));

    return container;
};

export default inplaceSelectPlugin;
export { inplaceSelectPlugin };
