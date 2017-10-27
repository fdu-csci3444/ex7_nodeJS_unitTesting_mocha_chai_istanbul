module.exports = {
    // NOTE ilker putting JSDoc 3 tags like @return to generate documentation from code
    /**
     * @return string of inpString in upper case. "" if inpString is not a string nor can be converted to string.
     */
    toUpper: function(inpString) {
        var upperString = "";
        if (typeof inpString === "string") {
            upperString = inpString.toUpperCase();
        } else if (("" + inpString) === "string") {
            inpString += "";
            upperString = inpString.toUpperCase();
        }
        return upperString;
    },

    /**
     * @return number length of inpString. NaN if inpString is not a string nor can be converted to string.
     */
    length: function(inpString) {
        var length4inpString = NaN; // Not A String
        if (typeof inpString === "string") {
            length4inpString = inpString.length;
        } else if (("" + inpString) === "string") {
            inpString += "";
            length4inpString = inpString.length;
        }
        return length4inpString;
    }
}