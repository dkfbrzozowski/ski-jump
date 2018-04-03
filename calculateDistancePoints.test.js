const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('flying hill', () => {
        const hillSize = 225;
        const kPoint = 200;
        const distanceEqkPoint = 200;
        const distanceGtkPoint = 227.5;
        const distanceLtkPoint = 194;

        it('should return 120p -- case when distance equal kPoint', () => {
            const actual = calculateDistancePoints(distanceEqkPoint, hillSize, kPoint);
    
            const expected = 120;
    
            assert.equal(actual, expected);
        });

        it('should return 153p -- case when distance gt kPoint', () => {
            const actual = calculateDistancePoints(distanceGtkPoint, hillSize, kPoint);
    
            const expected = 153;
    
            assert.equal(actual, expected);
        });

        it('should return 112.8 -- case when distance lt kPoint', () => {
            const actual = calculateDistancePoints(distanceLtkPoint, hillSize, kPoint);
    
            const expected = 112.8;
    
            assert.equal(actual, expected);
        });
    });

    describe('large hill', () => {

        const hillSize = 134;
        const kPoint = 120;
        const distanceEqkPoint = 120;
        const distanceGtkPoint = 134;
        const distanceLtkPoint = 117.5;

        it('should return 60 -- case when distance equal kPoint', () => {
            const actual = calculateDistancePoints(distanceEqkPoint, hillSize, kPoint);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });

        it('should return 85.2 -- case when distance gt kPoint', () => {
            const actual = calculateDistancePoints(distanceGtkPoint, hillSize, kPoint);
    
            const expected = 85.2;
    
            assert.equal(actual, expected);
        });

        it('should return 55.5 -- case when distance lt kPoint', () => {
            const actual = calculateDistancePoints(distanceLtkPoint, hillSize, kPoint);
    
            const expected = 55.5;
    
            assert.equal(actual, expected);
        });
    });

    describe('normal hill', () => {

        const hillSize = 109;
        const kPoint = 98;
        const distanceEqkPoint = 98;
        const distanceGtkPoint = 111;
        const distanceLtkPoint = 90.5;

        it('should return 60 -- case when distance equal kPoint', () => {
            const actual = calculateDistancePoints(distanceEqkPoint, hillSize, kPoint);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });

        it('should return 86  -- case when distance gt kPoint', () => {
            const actual = calculateDistancePoints(distanceGtkPoint, hillSize, kPoint);
    
            const expected = 86;
    
            assert.equal(actual, expected);
        });

        it('should return 45 -- case when distance lt kPoint', () => {
            const actual = calculateDistancePoints(distanceLtkPoint, hillSize, kPoint);
    
            const expected = 45;
    
            assert.equal(actual, expected);
        });
    });


});