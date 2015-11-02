var assert = require('assert'),
    diacritics = require('../lib/diacritics');

describe('Diacritics', function() {

    describe('#purify', function() {

        it('Should convert Swedish special chars', function() {

            var str = 'Ää Åå Éé Öö';
            assert.equal(diacritics.purify(str), 'Aa Aa Ee Oo');
        });

        it('Should convert Danish special chars', function() {

            var str = 'Åå Ææ Éé Øø';
            assert.equal(diacritics.purify(str), 'Aa AEae Ee Oo');
        });

        it('Should convert German special chars', function() {

            var str = 'Ää Åå Ææ Ğğ Ëë Öö Øø Şş Üü ẞß Ÿÿ';
            assert.equal(diacritics.purify(str), 'Aa Aa AEae Gg Ee Oo Oo Ss Uu Ss Yy');
        });

        it('Should convert Spanish special chars', function() {

            var str = 'Áá Éé Íí Ññ Óó Úú Üü';
            assert.equal(diacritics.purify(str), 'Aa Ee Ii Nn Oo Uu Uu');
        });

        it('Should convert French special chars', function() {

            var str = 'Ùù Ûû Üü Ÿÿ Àà Ââ Ææ Çç Éé Èè Êê Ëë Ïï Îî Ôô Œœ';
            assert.equal(diacritics.purify(str), 'Uu Uu Uu Yy Aa Aa AEae Cc Ee Ee Ee Ee Ii Ii Oo OEoe');
        });

        it('Should convert Italian special chars', function() {

            var str = 'Àà Èè Éé Ìì Òò Óó Ùù';
            assert.equal(diacritics.purify(str), 'Aa Ee Ee Ii Oo Oo Uu');
        });

        it('Should convert Dutch special chars', function() {

            var str = 'Éé Ëë Ïï Óó Öö Üü';
            assert.equal(diacritics.purify(str), 'Ee Ee Ii Oo Oo Uu');
        });

        it('Should convert Portuguese special chars', function() {

            var str = 'Ãã Áá Àà Ââ Çç Éé Êê Íí Õõ Óó Ôô Úú Üü';
            assert.equal(diacritics.purify(str), 'Aa Aa Aa Aa Cc Ee Ee Ii Oo Oo Oo Uu Uu');
        });

        it('Should convert Polish special chars', function() {

            var str = 'Ąą Ćć Ęę Łł Ńń Óó Śś Źź Żż';
            assert.equal(diacritics.purify(str), 'Aa Cc Ee Ll Nn Oo Ss Zz Zz');
        });
    });

    describe('#alphanumeric', function() {

        it('Should remove all non alphanumeric chars', function() {

            var str = 'This is â really, really awesome test 1234!!! boo';
            assert.equal(diacritics.alphanumeric(str), 'This is  really really awesome test 1234 boo');

        });
    });
});
