# Eleanor Health Pair Programming Exercise

This project is written in React and TypeScript.

- The component library used is [Chakra UI](https://chakra-ui.com/docs/getting-started).
- [Jest](https://jestjs.io/docs/getting-started) is used as the test runner with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Background

This app is a simplified version of Ops Hub, our internal facing platform for clinical management. Ops Hub is used by staff to view member charts, record screening results, and send and receive messages.

## User Stories

See the [stories](./stories) directory.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

Tests are written with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

## Troubleshooting

### VS Code - Complex union type type error

If you are using VS Code and encounter the following type error:

```
Expression produces a union type that is too complex to represent.ts(2590)
```

you can resolve it by switching from the default VS Code TypeScript version and the workspace version:

1. Open the Command Palette (cmd + shift + p on Mac)
2. Type in `TypeScript: Select TypeScript version command`
3. Select `Use workspace Version - node_modules/typescript/lib`
