import colorPeg from "./color-peg.plugin";

const code = function(code) {
    return this.empty()
        .addClass("code")
        .append(
            new Array(code.length)
                .fill(0)
                .map((v, i) => colorPeg.call($("<div>"), code[i])),
        );
};

export default code;
export { code };
