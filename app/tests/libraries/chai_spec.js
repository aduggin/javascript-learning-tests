/*global describe:false, it:false, expect:false, chai:false */
'use strict';
describe("Chai", function(){

    it("has 32 assertions", function () {
        var assertions = [

            'a(type)',
            'an(type)',
            'instanceof(constructor)',

            'ok',
            'true',
            'false',
            'null',
            'undefined',
            'exist',
            'empty',
            'arguments',

            'equal(value)',
            'eql(value)',

            'above(value)',
            'least(value)',
            'below(value)',
            'most(value)',
            'within(start, finish)',
            'closeTo(expected, delta)',
            'match(regexp)',

            'include(value)',
            'contains(value)',
            'keys(key1, [key2], [...])',

            'satisfy(method)',
            'members(set)',

            'string(string)',
            'length(value)',

            'property(name, [value])',
            'ownProperty(name)',

            'respondTo(method)',

            'throw(constructor)'

        ];
        expect(assertions).to.have.lengthOf(31);
    });

    it("has 3 flags", function () {
        var words = [
            'deep',
            'itself',
            'contain'
        ];

        expect(words).to.have.length(3);

    });

    describe(".not", function(){
        it("Negates any of assertions following in the chain.", function () {
            expect(25).to.not.equal(100);
            expect({ foo: 'baz'}).to.not.have.property('name');
        });

    });





    /*
    describe("INSERT", function(){
        it("INSERT", function () {

            expect(INSERT).to.be.INSERT;
        });

    });
    */
});