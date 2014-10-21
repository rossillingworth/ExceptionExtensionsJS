ExceptionExtensionsJS
=====================

[![GitHub version](https://badge.fury.io/gh/rossillingworth%2FExceptionExtensionsJS.png)](http://badge.fury.io/gh/rossillingworth%2FExceptionExtensionsJS)
[![GitHub version](https://badge.fury.io/bo/rossillingworth%2FExceptionExtensionsJS.png)](http://badge.fury.io/bo/rossillingworth%2FExceptionExtensionsJS)
[![License MPL 2.0](http://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](http://www.mozilla.org/MPL/2.0/)


##What is it
Simplified Design by Contract for JavaScript.

####You what...
To put it more simply, it allows you to validate arguments passed to any function.
And if one suddenly fails, it will immediately drop you into the debugger when you are developing, or throw an Error with your meaningful message in Production.

#####Why do I want to do that?
Because when you are 100s of cycles into a looping system and it blows up, it can be almost impossible to work out why it went wrong. If you can debug it immediately, then you have all the stack state at hand, and you can simply walk backwards to find out why it failed.  

###Basic Usage
Add the following static import:
```javascript
function doesSomething(myArg){
    // validate function arguments
    Exception.when(myArg < 100,"myArg is too low");
    // now do your function code
    var result = myArg - 99;
    return result
}
```

###Debugging in Production
EE-JS can be switched to OFF by default for production systems. 

But when we get bugs in production, we need to identify the cause as quickly as possible.

Simply add 'debugger' to the url, and ExceptionExtensionsJS will be active when the page loads. Remember that you need to have the console open for the debugger to start.

ie: 
change
/some/thing/else.html 
to
/some/thing/else.html?debugger