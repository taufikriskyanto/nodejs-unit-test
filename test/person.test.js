import { fullName } from "../src/person.js";


test("test toEqual ", ()=>{
    const errorFullName = {
        "firstName" : "Taufik",
        "lastName" : "Faqih"
    };

    const successFullName = {
        "firstName" : "Taufik",
        "lastName" : "Riskyanto"
    }
    const name = fullName("Taufik", "Riskyanto");
    expect(name).toEqual(successFullName);
})