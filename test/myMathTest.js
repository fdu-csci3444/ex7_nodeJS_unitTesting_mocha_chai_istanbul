// NOTE this is following BDD

// const assert = require('assert');
// NOTE using chai for assertions instead of assert that comes with nodeJS 
const assert = require('chai').assert;
const myMath = require('../src/myMath.js');

const num1 = 123;
const num1String = "123";

describe('myMath', function() {
    describe('toString', function() {
        it('toString(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = myMath.toString(num1);
            assert.equal(result, num1String);
        });

        it('toString("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = myMath.toString(num1String);
            assert.equal(result, num1String);
        });

        it('toString should return type string', function() {
            let result = myMath.toString(num1);
            assert.typeOf(result, 'string');
        });
    });

    describe('toNumber', function() {
        it('toNumber("' + num1String + '") should return number value of ' + num1, function() {
            let result = myMath.toNumber(num1String);
            assert.equal(result, num1);
        });

        it('toNumber should return type number', function() {
            let result = myMath.toNumber(num1);
            assert.typeOf(result, 'number');
        });
    });
});