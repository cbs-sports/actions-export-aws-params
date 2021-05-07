module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Features
        "fix", // Bug Fixes
        "test", // Tests
        "docs", // Documentation
        "style", // Style Changes
        "refactor", // Code Refactoring
        "build", // Build System
        "deps", // Dependencies
        "revert", // Reverts
      ],
    ],
    // Warn (but allow) empty scope:
    "scope-empty": [1, "never"],
    // Warn if not capitalized (for properly-formatted headings):
    "scope-case": [1, "always", ["start-case", "sentence-case", "pascal-case", "upper-case"]],
    // Allow optional body:
    "body-empty": [0, "never"],
    // Allow (and warn if not) sentence case:
    "body-case": [1, "always", "sentence-case"],
    // Allow (and warn if not) punctuation in the body:
    "body-full-stop": [1, "always", "."],
    // Allow optional footer:
    "footer-empty": [0, "never"],
  },
};
