
const reverseString = require('./playDS');



describe('tests for my demo projects', () => {

    test('test the string is being reversed correctly', () => {
        expect(reverseString("vish")).toBe("hsiv")
    })

    test('contains character', () => {
        expect(reverseString("vish")).toContain("v")
    })
})
