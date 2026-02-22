PlayWrightAutomationUI

Minimal Playwright test repository for UI automation.

Prerequisites
- Node.js 16+ and npm

Setup
1. Install dependencies:

```bash
npm install
npx playwright install
```

Running tests
- Run all tests:

```bash
npx playwright test
```

- Run a single file:

```bash
npx playwright test tests/<file>.js
```

- Run tests in headed mode:

```bash
npx playwright test --headed
```

Notes
- Tests are in the `tests/` folder.
- Test reports are generated under the Playwright report folder when configured; check `playwright-report/` after a run.

If you want a tutorial-style README or inline examples for each Playwright concept, tell me and I will expand.
