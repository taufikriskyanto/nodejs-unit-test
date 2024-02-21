import { sayHelloAsync } from "../src/async.js";


test("Async Test", async()=>{
    const result  = await sayHelloAsync("Faqih");
    expect(result).toBe("Hello Faqih");
})

test("Async Test Promise", async()=>{

   await expect(sayHelloAsync("Faqih")).resolves.toBe("Hello Faqih");
   await expect(sayHelloAsync()).rejects.toBe("Name is Empty");

})