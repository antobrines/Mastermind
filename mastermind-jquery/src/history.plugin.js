import codePlugin from "./code.plugin";
import resultsPlugin from "./results.plugin";

function setRow(jQueryRow, code, results) {
    return jQueryRow
        .empty()
        .append(
            codePlugin.call($("<div>"), code),
            resultsPlugin.call($("<div>"), results, code.length),
        );
}

const historyPlugin = function(history) {
    const rows = history.reduce(
        (rows, rowData) =>
            rows.add(
                setRow(
                    $("<div>", { class: "row" }),
                    rowData.code,
                    rowData.results,
                ),
            ),
        $(),
    );

    return this.empty()
        .addClass("history")
        .append(rows);
};

export default historyPlugin;
export { historyPlugin, setRow };
