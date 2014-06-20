
describe("ExceptionExtensionsJS Library", function(){

//    it("isEmptyObject", function(){
//        // array
////        expect(JS.isEmptyObject([])).toBe(true);
//        expect(JS.extend({a:1},{b:2})).toEqual({a:1,b:2});
//    });

    describe("EXCEPTION",function(){

        /**
         * Verify data-ee="PROD" has been picked up and turned off debugging.
         */
        it("init",function(){
            expect(EXCEPTION.debug).toEqual(false);
        });

        it("when", function(){
            expect(function () {EXCEPTION.when(true,"test should fail")}).toThrow("test should fail");
            expect(function () {EXCEPTION.when(false,"test should pass")}).not.toThrow("test should pass");
        });
    });

});
