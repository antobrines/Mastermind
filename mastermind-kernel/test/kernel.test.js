import{Kernel} from "../kernel.class.js";


test("u dont know" , () => {
    let kernel = new Kernel({"codeLength" : 4, "colorsNumber" : 4, "duplicateColor" : false});
    expect(kernel.codeLength) .toBe(4)
});

test("u dont know" , () => {
    let kernel = new Kernel({"codeLength" : 4, "colorsNumber" : 4, "duplicateColor" : false});
    expect(kernel.colorsNumber) .toBe(4)
});

test("u dont know" , () => {
    let kernel = new Kernel({"codeLength" : 4, "colorsNumber" : 4, "duplicateColor" : false});
    expect(kernel.duplicateColor) .toBe(false)
});

test("u dont know" , () => {
    let kernel = new Kernel({"codeLength" : 4, "colorsNumber" : 4, "duplicateColor" : false});
    expect(kernel.isValidCode([1,2,3,"ar"])) .toBe(false)
});

test("u dont know" , () => {
    let kernel = new Kernel({"codeLength" : 4, "colorsNumber" : 4, "duplicateColor" : false});
    expect(kernel.isValidCode([1,1,2,3])).toBe(false)
});

test("u dont know" , () => {
    let kernel = new Kernel({"codeLength" : 4, "colorsNumber" : 4, "duplicateColor" : false});
    expect(kernel.isValidCode([1,1,2,3])).toBe(false)
});


