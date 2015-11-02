var diacritics = require('./diacritics');

module.exports = {

    /**
     * Replaces all spaces in a string with a hyphen
     * @param str {String} - this string
     * @returns {String}
     */
    hyphenate: function(str) {

        return str.trim().replace(/\s+/gim, '-');
    },

    /**
     * Replaces all spaces in a string with a underscores
     * @param str {String} - this string
     * @returns {String}
     */
    underscore: function(str) {

        return str.trim().replace(/\s+/gim, '_');
    },

    /**
     * Purifies, strips non alphanumeric chars, hyphenates spaces and converts to lowercase
     * @param str {String} - this string
     * @returns {String}
     */
    websafe: function(str) {

        return this.hyphenate(diacritics.purify(str)).toLowerCase();
    },

    /**
     * Purifies, strips non alphanumeric chars, replaces space with underscore and converts to uppercase
     * @param str {String} - this string
     * @returns {String}
     */
    fwssid: function(str) {

        this.underscore(diacritics.purify(str)).toUpperCase();
    }

};
