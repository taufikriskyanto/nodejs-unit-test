test('two plus two', () => {
    const value = 2 + 2;
    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeGreaterThanOrEqual(5);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBeLessThanOrEqual(3);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  
  test('Not Match Test', () => {
    expect('Taufik').not.toMatch(/kif/);
  });