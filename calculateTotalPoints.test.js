const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {

    it('should return 137.3p', () => {
        
        const distance = 134.0;
        const hillSize = 134;
        const kPoint = 120;
        const styleNotes = [19.0, 20.0, 19.5, 19.0, 18.5];
        const windFactor = -5.4;
        const gateFactor = 0;

        
        const actual = calculateTotalPoints(distance, hillSize, kPoint, styleNotes, windFactor, gateFactor).toFixed(1);
        const expected = 137.3;

        assert.equal(actual, expected);
    });
});