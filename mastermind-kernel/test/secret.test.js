import {Secret, computeHistrogram, computeWellPlaced,computeMisplaced }from "../secret.class.js";

/*test("u dont know" , () =>
            expect(computeHistrogram([1,2,3,4])).toEqual([,1,1,1]),
        );


test("u dont know" , () =>
        expect(computeWellPlaced([1,2,3,4], [3,2,,4])) .toEqual([2,4]),
    );



test("u dont know" , () =>
        expect(computeMisplaced([,1,0,1,0], [,,0,1,0])) .toEqual(1),
    );
*/


test("u dont know" , () =>{
    let t = new Secret([1,2,3,4]);
    let code = [2,1,4,2];
    expect(t.compare(code)).toEqual({wellPlaced : 0, misPlaced : 3})
});
