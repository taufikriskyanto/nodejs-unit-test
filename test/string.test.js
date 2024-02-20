test('Not Match Test', () => {
    expect('Taufik').not.toMatch(/kif/);
  });
  
  test('Match Test', () => {
    expect('Taufik').toMatch(/fik/);
  });