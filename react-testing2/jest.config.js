/** @type {import('jest').Config} */
const config = {
    "transformIgnorePatterns": [
        "node_modules/(?!msw)"
    ]
};

module.exports = config;