

test("test 1 ", ()=>{
    console.info("Test 1");
})
//hanya ini saja yang tidak di jalankan
test.skip("test skip ", ()=>{
    console.info("Test Skip");
})
test("test 2 ", ()=>{
    console.info("Test 2");
})