var diacritics = require('./lib/diacritics'),
    formating = require('./lib/formating');

module.exports = {
    alphanumeric: diacritics.alphanumeric,
    purify: diacritics.purify,
    hyphenate: formating.hyphenate,
    underscore: formating.underscore,
    websafe: formating.websafe,
    fwssid: formating.fwssid
};
