# Incur demo

A small [Incur](https://github.com/wevm/incur) CLI that ships through npm and
as standalone macOS, Linux, and Windows executables.

## Run locally

```sh
npm install
npm run dev -- greet Ada
```

```text
message: Hello, Ada!
```

The CLI also exposes a deterministic smoke command:

```sh
npm run dev -- ping
```

## Install

After the first release, install the npm package:

```sh
npm install --global @wevm/incur-demo
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
through npm. Standalone executables download the matching verified GitHub
Release asset. The standalone executables are unsigned.

## Release

Add a Changeset with each user-facing change:

```sh
npm run changeset
```

Pushes to `main` update a Changesets version pull request. Before merging the
first version pull request, add an npm automation token as the `NPM_TOKEN`
repository secret.

Merging the version pull request publishes the npm package, creates the matching
`v<version>` tag and draft GitHub Release, builds all supported standalone
executables with `wevm/incur/release@v1`, and publishes the completed release.

Run the same checks locally:

```sh
npm run check
npm exec -- changeset status
npm pack --dry-run
```
