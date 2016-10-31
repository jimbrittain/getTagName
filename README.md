# Javascript getTagName function
getTagName attempts to find the tag name of a supplied element and returns a lowercase string, or if failed an empty string.
## Usage
```
    var o = document.createElement('div');
    isTagName(o) === 'div'
    o = 'div';
    isTagName(o) === '';
```

## Methods

1. `'tagname' in elem`
2. `'nodeName' in elem`

## Issues

* Needs proper testing log, e.g. browser checks
* Seems a little light on methods
* NS version uses IMNS, not currently using ES6 namespacing
