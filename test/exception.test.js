import {callMe, MyException} from "../src/exception.js"

test("Exception Test", () =>{
    expect(() => callMe("Taufik")).toThrow();
    expect(() => callMe("Taufik")).toThrow(MyException);
    expect(() => callMe("Taufik")).toThrow("Ups my Exeption happens");
})


test("Success Test", () =>{
    expect(callMe("Faqih")).toBe("OK");
})