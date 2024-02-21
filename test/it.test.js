import { sum } from "../src/sum.js";


describe("when call sum(10,10)", ()=>{
    it("should get 20", ()=>{
        const value  =  sum(10,10);
        expect(value).toEqual(20);
    })
})