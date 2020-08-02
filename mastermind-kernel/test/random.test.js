import{generateValueArray, getRandomValue, randomCode}from "../random-code.class.js";
test("u dont know" , () =>
        expect(generateValueArray(2)) .toEqual([0,1]),
    );
/*
test("u dont know" , () =>
    expect(getRandomValue([0,1,2],true)) .toEqual(1),
);*/


/*var tes = new randomCode(3,10,true)
console.log(tes);*/