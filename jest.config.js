
const ConfigJest = () => {
    return {
        preset: 'js-jest',
        displayName: {
            name: 'reto-indra',
            color: 'greenBright'
        },
        modileFileExtensions: [
            'js',
            'json'
        ],
        verbose: true,
        testMatch: ['**/**/*.spec.js'],
        testEnvironment: 'node',
        detectOpenHandles: true,
        coverageDirectory: './coverage/',
        forceExit: true,
        modulePaths: ['<rootDir>'],
        moduleNameMapper: {
            '^@/(.*)$': '<rootDir>/$1'
        }
    }
}

