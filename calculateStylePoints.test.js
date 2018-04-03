const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {

        it('should return -1 -- parameter is not an array', () => {
            const actual = calculateStylePoints(19.0, 19.5, 19.0, 19.0, 19.0);

            const expected = -1;

            assert.equal(actual, expected);
        });

        it('should return 57p -- case when judges points equal 19.0, 19.5, 19.0, 19.0, 19.0', () => {
            const actual = calculateStylePoints([19.0, 19.5, 19.0, 19.0, 19.0]);
    
            const expected = 57;
    
            assert.equal(actual, expected);
        });

        it('should return 51p -- case when judges points equal 17.0, 17.0, 17.0, 17.0, 17.0', () => {
            const actual = calculateStylePoints([17.0, 17.0, 17.0, 17.0, 17.0]);
    
            const expected = 51;
    
            assert.equal(actual, expected);
        });

        it('should return 55.5p -- case when judges points equal 17.0, 19.0, 19.5, 18.0, 18.5', () => {
            const actual = calculateStylePoints([17.0, 19.0, 19.5, 18.0, 18.5]);
    
            const expected = 55.5;
    
            assert.equal(actual, expected);
        });

        it('should return 53.5p -- case when judges points equal 17.0, 17.0, 19.5, 18.0, 18.5', () => {
            const actual = calculateStylePoints([17.0, 17.0, 19.5, 18.0, 18.5]);
    
            const expected = 53.5;
    
            assert.equal(actual, expected);
        });
    });