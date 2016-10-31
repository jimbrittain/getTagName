"use strict";
/* global window, IMDebugger, $, __imns */
var adr = __imns('util.dom');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('getTagName' in adr)){
    /**
     * @function getTagName
     * @param elem {HTMLElement}
     * @return {String} tagname or empty string
     * @requires isHTMLElement, isString
     **/
    adr.getTagName = function(elem){
        var uv = __imns('util.validation');
        var name = '';
        if(uv.isHTMLElement(elem)){
            if('tagName' in elem){
                name = elem.tagName;
            } else if('nodeName' in elem){
                name = elem.nodeName;
            }
        }
        return (uv.isString(name)) ? name.toLowerCase() : ''; };
}
