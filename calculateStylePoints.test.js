const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('different notes', () => {
        it('numbers with comma', () => {
            const actual = calculateStylePoints([12.5, 14.5, 16.5, 18.5, 20])

            const expected = 49.5;

            assert.equal(actual, expected);
        })
        it('numbers without comma', () => {
            const actual = calculateStylePoints([12, 14, 16, 18, 20])

            const expected = 48;

            assert.equal(actual, expected);
        })
    })

    describe('two same notes', () => {
        it('numbers with comma', () => {
            const actual = calculateStylePoints([12.5, 12.5, 16.5, 18.5, 20])

            const expected = 47.5;

            assert.equal(actual, expected);
        })
        it('numbers without comma', () => {
            const actual = calculateStylePoints([12, 12, 16, 18, 20])

            const expected = 46;

            assert.equal(actual, expected);
        })
        it('same in the middle', () => {
            const actual = calculateStylePoints([12, 14, 14, 18, 20])

            const expected = 46;

            assert.equal(actual, expected);
        })
        it('same in the middle with comma', () => {
            const actual = calculateStylePoints([12.5, 14.5, 14.5, 18.5, 20])

            const expected = 47.5;

            assert.equal(actual, expected);
        })
    })
    describe('a few same notes', () => {
        it('three same numbers', () => {
            const actual = calculateStylePoints([12, 12, 12, 18, 20])

            const expected = 42;

            assert.equal(actual, expected);
        })
        it('three same numbers with comas', () => {
            const actual = calculateStylePoints([12.5, 12.5, 12.5, 18.5, 20])

            const expected = 43.5;

            assert.equal(actual, expected);
        })
        it('five same numbers', () => {
            const actual = calculateStylePoints([12, 12, 12, 12, 12])

            const expected = 36;

            assert.equal(actual, expected);
        })
        it('five same numbers with comas', () => {
            const actual = calculateStylePoints([12.5, 12.5, 12.5, 12.5, 12.5])

            const expected = 37.5;

            assert.equal(actual, expected);
        })
    })
})