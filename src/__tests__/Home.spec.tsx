export default describe('home component', () => {
  beforeEach(() => {
    console.log('before each!');
  });
  beforeAll(() => {
    console.log('before all!');
  });
  afterEach(() => {
    console.log('after each!');
  });
  afterAll(() => {
    console.log('after all!');
  });
  it('should have a correct sum result', () => {
    expect(2 + 2).toEqual(4);
  });
  it.skip('should display the meaning of live', () => {
    expect(2 + 2).toEqual(5);
  });

  it('should not regress', () => {});
});
