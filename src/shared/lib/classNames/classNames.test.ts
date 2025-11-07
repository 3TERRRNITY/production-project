import { classNames } from "./classNames"

describe('classNames', () => { 
    test('with only first parameter', () => {
        expect(classNames('someClass')).toBe("someClass")
    });
    test('with additional classes', () => {
        const expected = 'someClass class1 class2'
        expect(classNames(
            'someClass', 
            {}, 
            ['class1', 'class2']
        )).toBe(expected)
    });
    test('with falseble mods', () => {
        const expected = 'someClass class1 class2 hoverable'
        expect(classNames(
            'someClass',
            {hoverable: true, pointer: false}, 
            ['class1', 'class2']
        )).toBe(expected)
    });
    test('with mods', () => {
        const expected = 'someClass class1 class2 hoverable pointer'
        expect(classNames(
            'someClass', 
            {hoverable: true, pointer: true}, 
            ['class1', 'class2']
        )).toBe(expected)
    });
    test('with undefined mod', () => {
        const expected = 'someClass class1 class2 pointer'
        expect(classNames(
            'someClass', 
            {hoverable: undefined, pointer: true}, 
            ['class1', 'class2']
        )).toBe(expected)
    });
 })