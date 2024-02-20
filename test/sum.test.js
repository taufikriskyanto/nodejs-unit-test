import { sum } from "../src/sum.js";

test("test Tobe", ()=>{
    const result =  sum(1,2);
    expect(result).toBe(3);
})