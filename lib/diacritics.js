
//THANKS: http://unicodelookup.com/ & http://www.typeit.org/

var chars = {
    A: /[\u00C0\u00C1\u00C2\u00C3\u00C4\u00C5\u0104]/g,
    AE: /[\u00C6]/g,
    C: /[\u00C7\u0106]/g,
    E: /[\u00C8\u00C9\u00CA\u00CB\u0118]/g,
    ETH: /[\u00D0]/g,
    G: /[\u011E]/g,
    I: /[\u00CC\u00CD\u00CE\u00CF]/g,
    L: /[\u0141]/g,
    N: /[\u00D1\u0143]/g,
    O: /[\u00D2\u00D3\u00D4\u00D5\u00D6\u00D8]/g,
    OE: /[\u0152]/g,
    P: /[\u00DE]/g,
    S: /[\u015E\u1E9E\u015A]/g,
    U: /[\u00D9\u00DA\u00DB\u00DC]/g,
    Y: /[\u00DD\u0178]/g,
    Z: /[\u0179\u017B]/g,
    a: /[\u00E0\u00E1\u00E2\u00E3\u00E4\u00E5\u0105]/g,
    ae: /[\u00E6]/g,
    c: /[\u00E7\u0107]/g,
    e: /[\u00E8\u00E9\u00EA\u00EB\u0119]/g,
    eth: /[\u00F0]/g,
    g: /[\u011F]/g,
    i: /[\u00EC\u00ED\u00EE\u00EF]/g,
    l: /[\u0142]/g,
    n: /[\u00F1\u0144]/g,
    o: /[\u00F2\u00F3\u00F4\u00F5\u00F6\u00F8]/g,
    oe:/[\u0153]/g,
    p: /[\u00FE]/g,
    s: /[\u00DF\u015F\u015B]/g,
    u: /[\u00F9\u00FA\u00FB\u00FC]/g,
    y: /[\u00FD\u00FF]/g,
    z: /[\u017A\u017C]/g
};

module.exports = {

    /**
     * Removes all non alphanumeric chars allows whitespace
     * @param str {String} - this string
     * @returns {String}
     */
    alphanumeric: function(str) {

        return str.replace(/[^a-zA-Z\d\s:]/gi, '');
    },

    /**
     * Replace all diacritics with their basic latin equivalent, unknown equivalents are removed
     * @param str {String} - the string
     * @returns {String}
     */
    purify: function (str) {

        for (var letter in chars) {
            str = str.replace(chars[letter], letter);
        }
        return this.alphanumeric(str);
    }

};
