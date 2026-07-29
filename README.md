# Incur demo

A small [Incur](https://github.com/wevm/incur) CLI that ships through npm and
as standalone macOS, Linux, and Windows executables.

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

Install the npm package:

```sh
npm i -g incur-demo
incur-demo greet Ada
```

Or install the standalone executable:

```sh
curl -fsSL https://github.com/wevm/incur-demo/releases/latest/download/install.sh | sh
```

```powershell
irm https://github.com/wevm/incur-demo/releases/latest/download/install.ps1 | iex
```

Both distributions support `incur-demo --update`. Package installations update
through their package manager. Standalone executables download the matching
verified GitHub Release asset. The standalone executables are unsigned.

## Release

Add a Changeset with each user-facing change:

```sh
pnpm run changeset
```

Pushes to `main` update a Changesets version pull request. Before merging the
first public version pull request, configure npm trusted publishing for
`wevm/incur-demo` and `release.yml`.

Merging the version pull request publishes `incur-demo` to npm and creates the
matching `v<version>` tag and GitHub Release. The `wevm/incur/release@v1` step
then builds and uploads all supported standalone executables.

Run the same checks locally:

```sh
pnpm run check:types
pnpm test
pnpm run build
pnpm pack --dry-run
pnpm run build:binaries
pnpm exec changeset status
```
