// NOTE ilker module.exports is how you create/declare a module in nodeJS
//      Note it returns an object, just like our JS module using IIFE
//      and you import it via "require" in wherever you will import it
module.exports = {
    // NOTE ilker putting JSDoc 3 tags
    /**
     * @return String of inpNumber
     */
    toString: function(inpNumber) {
        var numberStr = ""; // means inpNumber is not a number nor can be parsed to number
        if (typeof inpNumber === "number") {
            numberStr = inpNumber.toString();
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            numberStr = inpNumber;
        }
        return numberStr;
    },

    /**
     * @return number of inpNumber
     */
    toNumber: function(inpNumber) {
        var num = NaN; // Not A Number
        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            num = Number(inpNumber);
        }
        return num;
    },

    /**
     * @return number sum of inpNumber1 + inpNumber2
     */
    add2numbers: function(inpNumber1, inpNumber2) {
        var sum = NaN,
            num1 = NaN,
            num2 = NaN; // Not A Number
        // get num1
        if (typeof inpNumber1 === "number") {
            num1 = inpNumber1;
        } else if (typeof inpNumber1 === "string" && Number(inpNumber1) === "number") {
            num1 = Number(inpNumber1);
        }

        // get num2
        if (typeof inpNumber2 === "number") {
            num2 = inpNumber2;
        } else if (typeof inpNumber2 === "string" && Number(inpNumber2) === "number") {
            num2 = Number(inpNumber2);
        }

        return num1 + num2;
    }
}