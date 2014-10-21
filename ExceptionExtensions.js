/**
 * Please assume an MPL 2 license
  *
 * Created by: Ross Illingworth
 * If you need a different license, please get in touch.
 */

var EXCEPTION = {
    on:true
    ,debug:true
    ,when:function(condition,message){
        if(!!condition){
            if(EXCEPTION.debug){
                alert(message);
                // You have arrived here, so you have a design-by-contract failure
                // Use the stack trace (in debugger) to identify the cause
                debugger;
            }
            throw new Error(message);
        }
    }
};

/**
 * Anonymous function to check EE config attribute has been defined
 */
(function(){
    try{
        // check html element for attribute
        var htmlElement = document.getElementsByTagName("HTML")[0];
        var attr = !!htmlElement && htmlElement.getAttribute("data-ee");
        var conf = !!attr && attr.valueOf().toUpperCase();
        // check url for "debugger"
        var hash = (window.location.href.indexOf("debugger") > 0) || (window.location.href.indexOf("DEBUGGER") > 0);
        // update state
        EXCEPTION.debug = !(!!conf) || hash || (!!conf && !!(conf != "PROD" && conf != "PRODUCTION"));
        // flag if missing attribute config (ie: for production systems)
        !(!!conf) && console.warn("ExceptionExtensions config attribute (data-ee=\"\") missing from the 'html' element")
        // inform developer of EE state
        console.log("ExceptionExtensions debugging is " + (EXCEPTION.debug?"ON":"OFF"));
    }catch(e){
        console.error(e);
    }
})();


if(!window["_"]){
    if(console && console.log && EXCEPTION.debug){
        console.log("ExceptionExtensions recommends you use lodash.");
        console.log("Lodash makes pre & post conditions much easier, especially verifying variable types.");
    }
}