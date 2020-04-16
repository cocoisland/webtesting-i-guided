const { add } = require('./calculator.js');

// test away!
it('always start with a fail to make sure you are testing the right thing',
    function() {
        //expect(true).toBe(false);
        expect(true).toBe(true);
    });

describe('calculator.js', function() {
    describe('add()',function() {
        it('expect return sum of two numbers', function() {
            // Arrange / Setup

            // Act / Execute
            const sum = add(2,2);
            // Assert / Expect
            expect(sum).toBe(4);
            expect(add(0,2)).toBe(2);
            
            expect(()=>{
                add(undefined,1);
            }).toThrow()
            
        });

        it('should return 1 argument when pass 1 argument', function(){
            expect(add(1)).toBe(1);
        });
            

        it('should return 0 when passing no arguments', function(){
            expect(add()).toBe(0);
        });

        it.todo('should fail when pass 3 args');
        
        it('should fail when pass in undefined or null',function(){
            expect(()=>{
                add([],"two");
            }).toThrow();
            expect(()=>{
                add(NaN);
            }).toThrow()
        });
        it('should throw error when pass in {} / string object', function(){
            expect(() => {
                add(2, {});
            }).toThrow();
        });

    });
});

