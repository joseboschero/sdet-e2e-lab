# SDET E2E Lab (Playwright + Cypress + TypeScript + BDD)

A hands-on SDET portfolio project showcasing modern QA Automation practices using Playwright, Cypress, TypeScript, BDD with Cucumber (Gherkin), API testing, a local mock API, and CI/CD execution via GitHub Actions.

## Tech Stack

- TypeScript

- Playwright (UI + API testing)

- Cypress (UI testing)

- Cucumber (BDD / Gherkin)

- Mock API (local test server)

- GitHub Actions (CI/CD)

## What this project demonstrates

- UI and API automated testing

- Maintainable test architecture

- BDD implementation with Gherkin

- Mocked backend for controlled testing

- CI/CD pipelines for all test suites

- Professional SDET-level project structure

## Project Structure (High Level)

- tests/ → automated tests (Playwright, Cypress, BDD)

- mock-api/ → local mock API server

- db.json → mock API data

- .github/workflows/ → CI pipelines (Playwright, Cypress, BDD)

- playwright.config.ts

- cypress.config.ts

- package.json

## Requirements

- Node.js 20+

- npm

## Installation

Clone the repository:

```git clone https://github.com/joseboschero/sdet-e2e-lab.git```

```cd sdet-e2e-lab```

Install dependencies:

```npm ci```

Install Playwright browsers:

```npx playwright install```

## Run the Mock API

Some API tests depend on a local mock server.

Start it in a separate terminal:

```npm run api:mock```

It should run at:

http://127.0.0.1:3001/api/users

## Run Playwright Tests

```npm run test:pw```

To open the HTML report:

```npx playwright show-report```

## Run Cypress Tests

```npm run test:cy```

Artifacts (if failures occur) will be stored in:

- cypress/screenshots

- cypress/videos

## Run BDD Tests (Cucumber)

```npm run test:bdd```

BDD scenarios are written in Gherkin and implemented in TypeScript step definitions.

## Run All Test Suites

To execute Playwright + Cypress + BDD together:

```npm run test:all```

If API tests are included, make sure the mock API is running first.

## CI/CD (GitHub Actions)

This project includes workflows that run on push and pull request:

Playwright Workflow:

- Installs dependencies

- Installs browsers

- Starts mock API

- Runs tests

- Uploads Playwright report artifact

Cypress Workflow:

- Installs dependencies

- Runs Cypress tests

- Uploads screenshots and videos

BDD Workflow:

- Installs dependencies

- Runs Cucumber tests

- Uploads artifacts if configured

### Author

- ##### José Boschero
- QA Analyst & QA Automation Engineer
- https://github.com/joseboschero
