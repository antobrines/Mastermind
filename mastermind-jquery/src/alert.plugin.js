const alert = function(title, message, callback = () => {}) {
    return this.append(
        $("<div>", { class: "screen" })
            .append(
                $("<div>", { class: "dialog" }).append(
                    $("<div>", { class: "header", text: title }),
                    $("<div>", { class: "main" }).append(
                        $("<div>", { class: "content", text: message }),
                        $("<div>", {
                            class: "footer",
                            text: "Cliquer pour fermer",
                        }),
                    ),
                ),
            )
            .click(e => {
                e.target.remove();
                callback();
            }),
    );
};

export default alert;
export { alert };
