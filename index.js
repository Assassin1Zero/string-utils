var diacritics = require('./lib/diacritics'),
    formating = require('./lib/formating');

/**
 * String Utils Module
 * @module string-utils
 */
module.exports = {

    /**
     * Removes all non alphanumeric chars allows whitespace
     * @param {string} str - this string
     * @returns {string}
     */
    alphanumeric: diacritics.alphanumeric,

    /**
     * Replace all diacritics with their basic latin equivalent, unknown equivalents are removed
     * @param {string} str - the string to purify
     * @returns {string}
     */
    purify: diacritics.purify,

    /**
     * Replaces all spaces in a string with a hyphen
     * @param {string} str - this string
     * @returns {string}
     */
    hyphenate: formating.hyphenate,

    /**
     * Replaces all spaces in a string with a underscores
     * @param {string} str - this string
     * @returns {string}
     */
    underscore: formating.underscore,

    /**
     * Purifies, strips non alphanumeric chars, hyphenates spaces and converts to lowercase
     * @param {string} str - this string
     * @returns {string}
     */
    websafe: formating.websafe,

    /**
     * Purifies, strips non alphanumeric chars, replaces space with underscore and converts to uppercase
     * @param str {string} - this string
     * @returns {string}
     */
    fwssid: formating.fwssid
};
