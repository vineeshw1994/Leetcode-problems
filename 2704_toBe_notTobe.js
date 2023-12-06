function expect(value) {
    return {
        toBe: function (otherValue) {
            if (value !== otherValue) {
                throw new Error('Not Equal');
            }
            return true;
        },
        notToBe: function (otherValue) {
            if (value === otherValue) {
                throw new Error('Equal');
            }
            return true;
        },
    };
}


try {
    expect(5).toBe(5); // No error will be thrown
    expect(5).notToBe(10); // No error will be thrown
    expect('hello').toBe('world'); // Error: Not Equal will be thrown
    expect(true).notToBe(true); // Error: Equal will be thrown
} catch (error) {
    console.error(error.message);
}
