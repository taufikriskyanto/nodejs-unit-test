import {sumAll} from "../src/sum.js"


// test("sum([10,10]", ()=>{
//     expect(sum(10,10)).toBe(20);
// })

const table = [
    [[10,10,10], 30],
    [[10,10,10,10,10], 50],
    [[10,10,10,10,10,10,10], 70]];

test.each(table)("test sumAll(%s) should result %i", (number, expected)=>{
    expect(sumAll(number)).toBe(expected);
})


const table2 = [
    {numbers : [10,10,10], expected : 30},
    {numbers : [10,10,10,10,10], expected : 50},
    {numbers: [10,10,10,10,10,10,10], expected : 70}];

test.each(table2)("test sumAll($numbers) should result $expected by destructuring", ({numbers, expected})=>{
    expect(sumAll(numbers)).toBe(expected);
})
