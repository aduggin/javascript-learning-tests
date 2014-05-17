/*global describe:false, it:false, expect:false, chai:false */
'use strict';
describe("Arrays", function(){

    it("are ordered lists of numerically indexed values, beginning with the index zero", function () {
        var myColours = ['red', 'blue', 'yellow'];

        expect(myColours[0]).to.equal('red');
        expect(myColours[1]).to.equal('blue');
        expect(myColours[2]).to.equal('yellow');
    });

    describe(".length", function(){
        it("every array has a length property", function () {
            var myArray = [1, 2, 3];
            expect(myArray.length).to.be.defined;
        });

    });

    describe("Array.prototype.shift()", function () {
        it("removes the first element from an array and returns it", function () {
            var myArray = [1, 2, 3, 4],
                foo = myArray.shift();

            expect(myArray).to.eql([2, 3, 4]);
            expect(foo).to.equal(1);
        });
    });
});