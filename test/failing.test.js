import { sayHello } from "../src/sayHello.js";

test.failing("sayHello Error", ()=>{
    sayHello(null);
})