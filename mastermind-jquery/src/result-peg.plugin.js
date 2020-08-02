const resultPeg = function(type) {
    this.addClass("result-peg");
    if (["misplaced", "well-placed"].includes(type)) {
        this.attr("type", type);
    }
    return this;
};

export default resultPeg;
export { resultPeg };
