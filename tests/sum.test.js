const {sum} = require('../sum');
describe('sum of two items', async () => {
    test('adds 1 + 2 to equal 3',  () => {
        expect(sum(1, 2)).toBe(3);
    });
})