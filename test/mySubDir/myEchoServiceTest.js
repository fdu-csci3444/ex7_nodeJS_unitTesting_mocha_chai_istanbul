// const assert = require('assert');
// NOTE_1 using chai for assertions instead of assert that comes with nodeJS 
// NOTE_2 "require" is how you import modules in nodeJS
const assert = require('chai').assert;
const myEchoService = require('../../src/mySubDir/myEchoService.js');

const inp1Str = "HelloMsg";

describe('myEchoService', function() {
    before(function() {
        // console.log('in myEchoService before');
    });

    after(function() {
        // console.log('in myEchoService after');
    });

    beforeEach(function() {
        // console.log('in myEchoService beforeEach');
    });

    afterEach(function() {
        // console.log('in myEchoService afterEach');
    });

    describe('echo', function() {
        it('echo(' + inp1Str + ') should return string value of "' + inp1Str + '"', function() {
            let result = myEchoService.echo(inp1Str);
            assert.equal(result, inp1Str);
        });

        it('echo should return type string for an input of type "string"', function() {
            let result = myEchoService.echo(inp1Str);
            assert.typeOf(result, 'string');
        });
    });
});