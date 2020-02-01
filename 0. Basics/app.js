"use strict";
function combine(input1, input2, resultType) {
    if (resultType === "as-number") {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
combine(1, 2, "as-number");
