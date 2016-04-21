/**
 * @fileoverview const must be written uppercase
 * @author Evgeny Khmelev
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
     * Checks if a string contains lower-case
     * @param {String} name The string to check.
     * @returns {boolean} if the string is uppercased
     * @private
     */
    function isUppercased (name) {
        var regexp = /[a-z]/g;

        return !!name.search(regexp);
    }

    return {
        "VariableDeclaration": function(node) {
            var name = node.kind;

            if (name === 'const' ) {
                context.getDeclaredVariables(node).forEach(function (constant) {
                    var name = constant.name;

                    if (!isUppercased(name)) {
                        context.report({
                            node: node,
                            message: "const {{name}} should be written uppercase.",
                            data: { name: name }
                        });
                    }
                });
            }
        }
    };
};

module.exports.schema = [];
