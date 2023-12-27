const { override, useBabelRc } = require('customize-cra'); // Cu phap import commonjs

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);
