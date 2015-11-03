var diacritics = require('./diacritics');

/**
 * String Utils Module - Formating
 * @module string-utils/formating
 */
module.exports = {

    /**
     * Replaces all spaces in a string with a hyphen
     * @param {string} str - this string
     * @returns {string}
     */
    hyphenate: function(str) {

        return str.trim().replace(/\s+/gim, '-');
    },

    /**
     * Replaces all spaces in a string with a underscores
     * @param {string} str - this string
     * @returns {string}
     */
    underscore: function(str) {

        return str.trim().replace(/\s+/gim, '_');
    },

    /**
     * Purifies, strips non alphanumeric chars, hyphenates spaces and converts to lowercase
     * @param {string} str - this string
     * @returns {string}
     */
    websafe: function(str) {

        return this.hyphenate(diacritics.purify(str)).toLowerCase();
    },

    /**
     * Purifies, strips non alphanumeric chars, replaces space with underscore and converts to uppercase
     * @param str {string} - this string
     * @returns {string}
     */
    fwssid: function(str) {

        this.underscore(diacritics.purify(str)).toUpperCase();
    }

};
