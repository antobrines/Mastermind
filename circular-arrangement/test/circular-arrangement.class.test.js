import CircularArrangement from "../src/circular-arrangement.class.js";

function length(coordinates1, coordinates2 = { left: 0, top: 0 }) {
    const x =
            Number.parseFloat(coordinates1.left) -
            Number.parseFloat(coordinates2.left),
        y =
            Number.parseFloat(coordinates1.top) -
            Number.parseFloat(coordinates2.top);
    return Math.sqrt(x * x + y * y);
}

function testCircularArrangement(disksNumber) {
    describe("Pour un ensemble de " + disksNumber + " éléments", () => {
        let circularArrangement;
        beforeEach(() => {
            circularArrangement = new CircularArrangement(disksNumber);
        });
        test("Le nombre de disques doit être " + disksNumber, () =>
            expect(circularArrangement.disksNumber).toBe(disksNumber),
        );
        test("Le rayon du cercle doit être superieur ou égale à 1", () =>
            expect(circularArrangement.circleRadius).toBeGreaterThanOrEqual(
                1,
            ));
        describe("La position des éléments",() => {
            let positions = [];
            beforeEach(() => {
                for (let i = 0; i<disksNumber; i++){
                    positions[i] =i;
                }
                positions = positions.map(coor =>circularArrangement.coordinates(coor));
                /*for (let i = 0; i < disksNumber; i++) {//replace with map
                    positions[i] = circularArrangement.coordinates(i);
                }*/
            });
            test("Les éléments sont tous disposés sur le cercle", () => {
                let result = true;
                for (let i = 0; result && i < disksNumber; i++) {//replace with reduce
                    let l = length(positions[i]);
                    result =
                        result &&
                        l > circularArrangement.circleRadius - 0.0000001 &&
                        l < circularArrangement.circleRadius + 0.0000001;
                }
                expect(result).toBe(true);
            });
            test("Les éléments sont uniformément répartis sur le cercle à une distance supérieur à 1", () => {
                let result = true;
                if (disksNumber > 1) {
                    let o = length(positions[disksNumber - 1], positions[0]);
                    result = o > 0.9999999;
                    for (let i = 1; result && i < disksNumber; i++) {//replace with filter
                        let l = length(positions[i - 1], positions[i]);
                        result =
                            result && l > o - 0.0000001 && l < o + 0.0000001;
                    }
                }
                expect(result).toBe(true);
            });
            test("Les positions sont définis en em", () =>
                expect(
                    /^[-0-9.]*em$/.test(positions[1].left) &&
                        /^[-0-9.]*em$/.test(positions[1].top),
                ).toBe(true));
        });
    });
}

describe("CircularArrangement", () => {
    testCircularArrangement(3);
    testCircularArrangement(5);
    testCircularArrangement(7);
    testCircularArrangement(9);
});