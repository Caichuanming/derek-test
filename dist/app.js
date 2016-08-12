"use strict";

function f() {

    var x = void 0;

    {

        // okay, block scoped name

        var _x = "sneaky";

        // error, const

        //x = "foo";

        console.log(_x);
    }

    // okay, declared with `let`

    x = "bar";

    // error, already declared in block

    //let x = "inner";

    console.log(x);
}

f();