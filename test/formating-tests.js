var assert = require('assert'),
    formating = require('../lib/formating');

describe('Formating', function() {

    describe('#hyphenate', function() {

        it('Should replace spaces with hyphnes', function() {

            var str = 'This is a test';
            assert.equal(formating.hyphenate(str), 'This-is-a-test');

        });
    });

    describe('#websafe', function() {

        it('Should purifiy, strip non alphanumeric chars, replace spaces with hyphens and lowercase', function() {

            var str = 'This iŚ à Tēst!1234 test';
            assert.equal(formating.websafe(str), 'this-is-a-tst1234-test');

        });
    });

    describe('#fwssid', function() {

        it('Should purifiy, strip non alphanumeric chars, replace spaces with underscores and captisalize', function() {

            var str = 'This iŚ à Tēst!1234 test';
            assert.equal(formating.websafe(str), 'this-is-a-tst1234-test');

        });
    });


});
