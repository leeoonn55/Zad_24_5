const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('negative wind', () => {
        it('without coma', () => {
            const actual = calculateTotalPoints(130, 'normal', 120, [12, 15, 17, 19, 20], -3, -2);
            
            const expected = 126;

            assert.equal(actual, expected);
        })
        it('with coma', () => {
            const actual = calculateTotalPoints(130, 'normal', 120, [12, 15, 17, 19, 20], -3.1, -2.1);
            
            const expected = 125.8;

            assert.equal(actual, expected);
        })
    })
    describe('positive wind', () => {
        it('without coma', () => {
            const actual = calculateTotalPoints(130, 'normal', 120, [12, 15, 17, 19, 20], 3, 2);
            
            const expected = 136;

            assert.equal(actual, expected);
        })
        it('with coma', () => {
            const actual = calculateTotalPoints(130, 'normal', 120, [12, 15, 17, 19, 20], 3.1, 2.1);
            
            const expected = 136.2;

            assert.equal(actual, expected);
        })
    })
    describe('with 0 value', () => {
        it('0 wind', () => {
            const actual = calculateTotalPoints(130, 'normal', 120, [12, 15, 17, 19, 20], 0, 2);
            
            const expected = 133;

            assert.equal(actual, expected);
        })
    })
})