/*global describe:false, it:false, expect:false, chai:false */
'use strict';
describe("jquery", function(){

    it("$ should be defined", function () {
        expect($).to.be.defined;
    });

    describe("$.isArray()", function(){
        it("returns a Boolean indicating whether the object is a JavaScript array", function () {

            expect($.isArray([])).to.be.true;
            expect($.isArray({})).to.be.false;
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