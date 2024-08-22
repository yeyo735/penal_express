export default {
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
