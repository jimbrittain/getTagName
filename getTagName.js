"use strict";
/* global window, IMDebugger, $, __imns, isString, isHTMLElement */
/**
 * @function getTagName
 * @param elem {HTMLElement}
 * @return {String} tagname or empty string
 * @requires isHTMLElement, isString
 **/
var getTagName = function(elem){
    var name = '';
    if(isHTMLElement(elem)){
        if('tagName' in elem){
            name = elem.tagName;
        } else if('nodeName' in elem){
            name = elem.nodeName;
        }
    }
    return (isString(name)) ? name.toLowerCase() : ''; };
