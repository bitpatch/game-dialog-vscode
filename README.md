# Game Dialog Script for VS Code

Visual Studio Code extension for Game Dialog Script language with syntax highlighting and language support.

## Features

- **Syntax Highlighting** - Full syntax highlighting for `.gds` files
- **Auto-completion** - Intelligent code completion for keywords and operators
- **Bracket Matching** - Automatic bracket and quote pairing
- **Code Folding** - Fold code blocks based on indentation
- **Comment Support** - Line comments with `#`

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Press `Ctrl+P` / `Cmd+P`
3. Type `ext install bitpatch.gds-language-support`
4. Press Enter

### From VSIX

1. Download the latest `.vsix` file from [Releases](https://github.com/bitpatch/game-dialog-vscode/releases)
2. Open VS Code
3. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
4. Click `...` → `Install from VSIX...`
5. Select the downloaded file

## Game Dialog Script Language

Game Dialog Script is a simple language for writing game dialogs with integrated logic.

### Syntax Example

```gds
# Character introduction
name = "Arthur"
age = 25

<< "Hello! My name is " + name

# Conditional dialog
if age >= 18:
    << "I am an adult"
else:
    << "I am a minor"

# Loop example
counter = 0
while counter < 3:
    << "Count: " + counter
    counter = counter + 1
