import {sayHelloAsync} from "../src/async.js"


test.concurrent("concurrent 1", async()=>{
    await expect(sayHelloAsync("Taufik")).resolves.toBe("Hello Taufik");
})

test.concurrent("concurrent 2", async()=>{
    await expect(sayHelloAsync("Faqih")).resolves.toBe("Hello Faqih");
})

test.concurrent("concurrent 3", async()=>{
    await expect(sayHelloAsync("Gitta")).resolves.toBe("Hello Gitta");
})



test.concurrent("concurrent 4", async()=>{
    await expect(sayHelloAsync("Muhammad")).resolves.toBe("Hello Muhammad");
})

test.concurrent("concurrent 5", async()=>{
    await expect(sayHelloAsync("Shaqeel")).resolves.toBe("Hello Shaqeel");
})

test.concurrent("concurrent 6", async()=>{
    await expect(sayHelloAsync("Cintia")).resolves.toBe("Hello Cintia");
})