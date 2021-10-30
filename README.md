# next // brendan-travis.github.io

View the deployed version here: https://brendan-travis.github.io/brendan-travis.github.io.next/

## Project Commands

`npm install` - Prepares the project and installs the git hooks

`npm run start` - Launch the site in development mode with hot reload

`npm run deploy` - Publishes a production version of the site in the docs folder

`npm run test` - Runs the test suite

`npm run lint` - Runs the linter

---

## Git hooks

Pre-commit:
- npm run lint
- npm run deploy
- git add docs/

Pre-push:
- npm run test
