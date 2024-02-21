import { sum } from "../src/sum.js";


beforeEach(()=>{
    console.info("Before unit test run");
})

afterEach(()=>{
    console.info("After unit test run");
})



beforeAll(()=>{
    console.info("Before all unit test run");
})

afterAll(()=>{
    console.info("After all unit test run");
})


test("test Tobe 1", ()=>{
    const result =  sum(1,2);
    expect(result).toBe(3);
    console.info("Running Unit Test 1");
})


test("test Tobe 2", ()=>{
    const result =  sum(1,2);
    expect(result).toBe(3);
    console.info("Running Unit Test 2");
})