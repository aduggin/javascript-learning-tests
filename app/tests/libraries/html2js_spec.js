/*global describe:false, it:false, expect:false, chai:false */
'use strict';
describe('html2js', function() {
    it('should expose the templates to window.__html__', function() {
        expect(window.__html__['fixtures/template.html']).to.not.be.empty;
    });

    it('template is available to jquery', function() {
        var $html = $(window.__html__['fixtures/template.html']);
        expect($html.text()).to.equal('content of the template');
        expect($html.attr('class')).to.equal('my-class');

        $html.append('<i>new</i>');
        expect($html.find('i').text()).to.equal('new');
    });
})