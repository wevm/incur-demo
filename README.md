# Incur demo

A small [Incur](https://github.com/wevm/incur) CLI that ships as standalone
macOS, Linux, and Windows executables.

## Run locally

```sh
pnpm install
pnpm run dev greet Ada
```

```text
message: Hello, Ada!
```

The CLI also exposes a deterministic smoke command:

```sh
pnpm run dev ping
```

## Install

After the first release, install the standalone executable:

```sh
curl -fsSL https://github.com/wevm/incur-demo/releases/latest/download/install.sh | sh
```

```powershell
irm https://github.com/wevm/incur-demo/releases/latest/download/install.ps1 | iex
```

The executable supports `incur-demo --update`, which downloads the matching
verified GitHub Release asset. The standalone executables are unsigned.

## Release

Add a Changeset with each user-facing change:

```sh
pnpm run changeset
```

Pushes to `main` update a Changesets version pull request. Merging the version
pull request uses Changesets to create the matching `v<version>` tag and GitHub
Release without publishing to the npm registry. The `wevm/incur/release@v1`
step then builds and uploads all supported standalone executables.

Run the same checks locally:

```sh
pnpm run check:types
pnpm test
pnpm run build
pnpm exec changeset status
```
