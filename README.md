# Incur demo

A small [Incur](https://github.com/wevm/incur) CLI that ships through npm and
as standalone macOS, Linux, and Windows executables.

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
