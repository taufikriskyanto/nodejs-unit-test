beforeEach(()=>{
    console.info("Before each outer");
})

afterEach(()=>{
    console.info("After each outer");
})



beforeAll(()=>{
    console.info("Before all outer");
})

afterAll(()=>{
    console.info("After all outer");
})


test("test outer ", ()=>{
    console.info("Test Outer");
})

describe("Inner ", ()=>{

    beforeAll(()=>{
        console.info("Before all Inner");
    })
    
    afterAll(()=>{
        console.info("After all Inner");
    })

    beforeEach(()=>{
        console.info("Before each Inner");
    })
    
    afterEach(()=>{
        console.info("After each Inner");
    })

    test("test outer ", ()=>{
        console.info("Test Inner");
    })

    describe("Inner Inner scope", ()=>{
        beforeAll(()=>{
            console.info("Before all Inner Inner");
        })
        
        afterAll(()=>{
            console.info("After all Inner Inner");
        })
    
        beforeEach(()=>{
            console.info("Before each Inner Inner");
        })
        
        afterEach(()=>{
            console.info("After each Inner Inner");
        })
    
        test("test outer ", ()=>{
            console.info("Test Inner Inner");
        })
    })
    
})