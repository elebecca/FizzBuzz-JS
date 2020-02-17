describe('fizzBuzz', function() {
    it('returns fizz if passed 3', function() {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('returns buzz if passed 5', function() {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
});