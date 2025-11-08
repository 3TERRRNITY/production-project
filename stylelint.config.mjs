/** @type {import("stylelint").Config} */
export default {
    extends: ["stylelint-config-standard-scss"],
    rules: {
        "declaration-empty-line-before": null,
        "selector-class-pattern": ["^(?:[A-Z][a-zA-Z0-9_-]*|[a-z][a-zA-Z0-9_-]*)$", { "resolveNestedSelectors": true }],
    }
}
