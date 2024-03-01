import { sayHello } from "../src/sayHello.js";


//SUCCESS
test("sayHello", ()=>{
    expect(sayHello("Faqih")).toBe("Hello Faqih");
})


//failed
test.failing("sayHello Error", ()=>{
    sayHello(null);
})