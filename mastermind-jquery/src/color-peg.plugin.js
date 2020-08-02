const colorPeg = function(value) {
    this.addClass("color-peg");
    if (!isNaN(parseInt(value))) {
        this.attr("value", value);
    }
    return this;
};

export default colorPeg;
export { colorPeg };
