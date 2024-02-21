const array = ["Taufik", "Riskyanto"];
const arrayOfObject =  [{name: "Taufik"}, {name : "Faqih"}];
  
  test('Array Test', () => {
    expect(array).toContain('Taufik');
    expect(array).toEqual(["Taufik", "Riskyanto"]);


    expect(arrayOfObject).toContainEqual({name:"Taufik"});
    expect(arrayOfObject).toEqual([{name: "Taufik"}, {name : "Faqih"}])
  });