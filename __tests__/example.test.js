
function soma(a, b) {
    return a+b;
}

test('soma should return 9 if 4 and 5 were the params', () => {
    const result = soma(4,5);

    expect(result).toBe(9);
})