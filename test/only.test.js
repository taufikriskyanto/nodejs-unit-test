

test("test 1 ", ()=>{
    console.info("Test 1");
})
//Hanya test ini aja yang dijalankan
test.only("test skip ", ()=>{
    console.info("Test Only");
})
test("test 2 ", ()=>{
    console.info("Test 2");
})