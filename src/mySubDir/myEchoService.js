// NOTE ilker module.exports is how you create/declare a module in nodeJS
//      Note it returns an object, just like our JS module using IIFE
//      and you import it via "require" in wherever you will import it
module.exports = {
    // NOTE ilker putting JSDoc 3 tags
    /**
     * @return String of inpStr
     */
    echo: function(inpStr) {
        return inpStr;
    }
}