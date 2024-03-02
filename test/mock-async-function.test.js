import { getBalance } from "../src/async.js";


test("Mock async function", async()=>{
    const from  = jest.fn();
    from.mockResolvedValueOnce(1000);

   await expect(getBalance("Taufik", from)).resolves.toEqual({
        name : "Taufik",
        balance : 1000
    })

    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(1000);
})


test.failing("Mock async function Rejected", async()=>{
    const from  = jest.fn().mockRejectedValueOnce(new Error("Ups"));
    await getBalance("Taufik", from);
})

test("Mock async function error Matchers", async()=>{
    const from  = jest.fn()
    from.mockRejectedValueOnce("Rejected");
    
    await expect(getBalance("Taufik", from)).rejects.toBe("Rejected");
})