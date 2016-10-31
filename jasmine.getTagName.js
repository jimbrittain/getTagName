"use strict";
describe("getTagName Test Suite", function(){
    beforeEach(function(done){
        var requireArr = [
            'dist/f/Namespace/Namespace.js',
            'dist/f/isHTMLElement/isHTMLElement.js',
            'dist/f/isString/isString.js'
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }
        setTimeout(function(){ done(); }, 1000);
    });

    var adr = window;
    var __imns = function(){ return window; }

    var divElement = document.createElement('div');
    var stringTest = '';
    var numberTest = '';
    var inputElement = document.createElement('input');
    var mainElement = document.createElement('main');
    var invalidElement = document.createElement('invalid');
    var sectionElement = document.createElement('section');

    it("getTagName is a function", function(){ expect(typeof adr.getTagName === 'function').toBe(true); });
    it("getTagName: {divElement} = 'div'", function(){ expect(adr.getTagName(divElement)).toBe('div'); });
    it("getTagName: {string} = ''", function(){ expect(adr.getTagName(stringTest)).toBe(''); });
    it("getTagName: {number} = ''", function(){ expect(adr.getTagName(numberTest)).toBe(''); });
    it("getTagName: {mainElement} = 'main'", function(){ expect(adr.getTagName(mainElement)).toBe('main'); });
    it("getTagName: {invalidElement} = ''", function(){ expect(adr.getTagName(invalidElement)).toBe('invalid'); });
    it("getTagName: {sectionElement} = 'section'", function(){ expect(adr.getTagName(sectionElement)).toBe('section'); });
});
