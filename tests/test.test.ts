describe('test', () => {
  test('test', () => {
    expect(1).toBe(1);
  });
  test('process env', () => {
    expect(process.env.FOO).toBe('BAR');
  });
});