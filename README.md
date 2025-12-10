# Telemetry Scaffold VS Code Extension

This repository scaffolds a VS Code extension with a telemetry initializer. The extension automatically runs the telemetry bootstrap during activation via an `init()` method and does not contribute commands yet.

## Configuration

Set the following environment variables before launching the extension to enable telemetry collection:

- `SFMC_TELEMETRY_USER`
- `SFMC_TELEMETRY_REPOSITORY`
- `SFMC_TELEMETRY_TOOL`
- `SFMC_TELEMETRY_VERSION`
- `SFMC_TELEMETRY_DOMAIN`

When all variables are provided, the extension downloads the specified telemetry tool for the host platform and architecture, enumerates Git repositories in the current workspace, and posts the collected data to the configured domain.

## Development

Install dependencies and run the lint/build pipeline:

```bash
npm install
npm test
```

## Build

To produce the compiled extension output in `dist/`, run the TypeScript build:

```bash
npm run compile
```

To create a VSIX package for installation, install `@vscode/vsce` if you do not have it and then package the extension from the repository root:

```bash
npm install --global @vscode/vsce
vsce package
```
