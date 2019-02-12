//规则配置网址：https://stylelint.io/user-guide/rules/
module.exports = { 
    processors: [], 
    extends: ["stylelint-config-standard","stylelint-config-recommended-scss"], 
    plugins: [
    	"stylelint-order",
    	"stylelint-scss"
    ],
    rules: {
        "font-family-no-missing-generic-family-keyword":null,
        "at-rule-empty-line-before":null,
        "rule-empty-line-before":null,
        "max-empty-lines":0,
        "comment-empty-line-before":"never",
        "no-invalid-double-slash-comments":true,
        "comment-whitespace-inside":"always",
        "no-missing-end-of-source-newline":true,
        "max-nesting-depth":5,
        "no-duplicate-at-import-rules":true,
        "no-extra-semicolons":true,
        "no-empty-source":true,
        "no-duplicate-selectors":true,
        "declaration-block-no-duplicate-properties":true,
        "color-no-invalid-hex":true,
        "unit-no-unknown":true,
        "string-no-newline":true,
        "property-no-unknown":true,
        "color-hex-case":'upper',
        "string-quotes":"single",
        "length-zero-no-unit":true,
        "property-case":"lower"
    }
}