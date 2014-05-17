/*global describe:false, it:false, expect:false, chai:false */
'use strict';
describe('html2js', function() {
    it('should expose the templates to to window.__html__', function() {
        expect(window.__html__['tests/fixtures/template.html']).to.not.be.empty;
    });

    it('template dom is available to jquery', function() {
        var $html = $(window.__html__['tests/fixtures/template.html']);
        expect($html.text()).to.equal('content of the template');
        expect($html.attr('class')).to.equal('my-class');
    });
})