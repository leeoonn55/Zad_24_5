const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normall', () => {
        it('jumped more than k-point', () => {
            const actual = calculateDistancePoints(102, 'normal', 90);

            const expected = 84;

            assert.equal(actual, expected);
        })
        it('jumped less than k-point', () => {
            const actual = calculateDistancePoints(88.5, 'normal', 90);

            const expected = 57;

            assert.equal(actual, expected);
        })
        it('jumped k-point', () => {
            const actual = calculateDistancePoints(90, 'normal', 90);

            const expected = 60;

            assert.equal(actual, expected);
        })
    })
    describe('large', () => {
        it('jumped more than k-point', () => {
            const actual = calculateDistancePoints(130.5, 'large', 120);

            const expected = 78.9;

            assert.equal(actual, expected);
        })
        it('jumped less than k-point', () => {
            const actual = calculateDistancePoints(110, 'large', 120);

            const expected = 42;

            assert.equal(actual, expected);
        })
        it('jumped k-point', () => {
            const actual = calculateDistancePoints(120, 'normal', 120);

            const expected = 60;

            assert.equal(actual, expected);
        })
    })
    describe('mamoth', () => {
        it('jumped more than k-point', () => {
            const actual = calculateDistancePoints(180.5, 'mamoth', 180);

            const expected = 120.6;

            assert.equal(actual, expected);
        })
        it('jumped less than k-point', () => {
            const actual = calculateDistancePoints(179.5, 'mamoth', 180);

            const expected = 119.4;

            assert.equal(actual, expected);
        })
        it('jumped k-point', () => {
            const actual = calculateDistancePoints(180, 'mamoth', 180);

            const expected = 120;

            assert.equal(actual, expected);
        })
    })
    describe('size hill', () => {
        it('wrong size of hill', () => {
            const actual = calculateDistancePoints(180.5, 'mamot', 180);

            const expected = 'Not correct hillSize';

            assert.equal(actual, expected);
        })
    })



})