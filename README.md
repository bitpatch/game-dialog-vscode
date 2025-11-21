# Game Dialog Script VS Code Extension

[![GitHub release](https://img.shields.io/github/v/release/bitpatch/game-dialog-vscode)](https://github.com/bitpatch/game-dialog-vscode/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

VS Code extension for [Game Dialog Script](https://github.com/bitpatch/game-dialog-cli) with syntax highlighting, code snippets, and script execution.

## Features

- **Syntax Highlighting** - Full language support for `.gds` files
- **Script Execution** - Run scripts directly from the editor with `Cmd+Shift+R` (macOS) or `Ctrl+Shift+R` (Windows/Linux)
- **Code Snippets** - Quick insertion of common patterns (type `dialog`, `if`, `while`, etc.)
- **Auto-completion** - Automatic bracket and quote pairing

## Installation

### 1. Install gdialog

```bash
# Via Homebrew
brew tap bitpatch/tools
brew install gdialog

# Via .NET Tool
dotnet tool install --global gdialog
```

### 2. Install Extension

Open VS Code → Extensions → Search "Game Dialog Script" → Install

## Usage

Open a `.gds` file and press `Cmd+Shift+R` (macOS) or `Ctrl+Shift+R` (Windows/Linux) to run. Results appear in the output panel.

## Syntax Example

```gds
# Variables
playerName = "Arthur"
reputation = 75

# Dialog output
<< "Welcome, " + playerName + "!"

# Conditionals
if reputation > 50
    << "Good to see you again!"
else
    << "I don't know you."

# Loops
count = 0
while count < 3
    << "Count: " + count
    count = count + 1
```

**Operators:** `+` `-` `*` `/` `=` `==` `!=` `<` `<=` `>` `>=` `<<` `>>` `not` `or` `and` `xor` `is`

## Development

Press `F5` to launch Extension Development Host for testing.

## License

MIT © [bitpatch](https://github.com/bitpatch)
