# Contribution Guidelines

This project adheres to [semantic versioning](https://semver.org/) and uses [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/) to automate the release and publishing process. Please refer to the Semantic Release documentation for details and examples on how to properly format your commits.

This project uses a custom implementation of the [Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) convention, and supports the following commit types:

| Commit Type | Label                                     | Description                                                                                       |
| :---------: | :---------------------------------------- | :------------------------------------------------------------------------------------------------ |
|   `feat`    | :star:&nbsp; Features                     | Used when a new feature is added or an existing feature is enhanced with new functionality.       |
|    `fix`    | :bug:&nbsp; Bug Fixes                     | Used when a bug or security vulnerability is fixed.                                               |
|   `test`    | :white_check_mark:&nbsp; Tests            | Used when adding missing tests or correcting existing tests.                                      |
|   `docs`    | :book:&nbsp; Documentation                | Used for documentation-only changes.                                                              |
|   `style`   | :nail_care:&nbsp; Style Changes           | Used for changes that do not affect the meaning of the code (spacing, formatting, linting, etc.). |
| `refactor`  | :broom:&nbsp; Code Refactoring            | Used for changes that neither fix a bug nor add a feature.                                        |
|   `build`   | :hammer:&nbsp; Build System               | Used for changes to the build system (npm scripts, configs, CI/CD workflows, etc.).               |
|   `deps`    | :package:&nbsp; Dependencies              | Used specifically when updating dependencies in `package.json`/`package-lock.json`.               |
|  `revert`   | :leftwards_arrow_with_hook:&nbsp; Reverts | Used when reverting previous commits.                                                             |

Please reach out to any of the code owners for additional support.
