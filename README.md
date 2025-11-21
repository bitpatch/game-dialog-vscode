# Official `Game Dialog Script` extension for VS Code

[![GitHub release](https://img.shields.io/github/v/release/bitpatch/game-dialog-vscode)](https://github.com/bitpatch/game-dialog-vscode/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

This is the VS Code extension project for full support of the [Game Dialog Script](https://github.com/bitpatch/game-dialog-lang) language. Scripts themselves should be written in `*.gds` files.

For comfortable work with the language you should install the CLI tool [`gdialog`](https://github.com/bitpatch/game-dialog-cli).

## Installation for macOS

If you are a macOS user the easiest way is via `Homebrew`.

If you don't have Homebrew yet, run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then to install `gdialog` itself, run:

```bash
brew tap bitpatch/tools
brew install gdialog
```

## Installation on any system

You can also install `gdialog` on any other system using `dotnet`. If you don't have dotnet yet, install it in any convenient way. Easiest is to start at the official site: [dotnet.microsoft.com](https://dotnet.microsoft.com/). Or ask one of the AI assistants — that's the time we live in :)

After that install the tool with:

```bash
dotnet tool install -g gdialog
```

## Briefly about the language

Game Dialog Script is a language intended, as the name obviously suggests, for writing non‑linear dialog in games. An important point: the language is fully written in `C# 9` and therefore can be used seamlessly with the Unity and Godot (Mono) game engines.

A script can look at and change variable values directly in C# on the fly and return them. This lets you seamlessly connect the dialog script logic with the game state written in C#. That makes this language a great choice if you develop games in Unity or Godot.

To test your dialogs you don't even need to run the game; just execute them in VS Code using the CLI tool `gdialog` and this extension.

## Quick start on Unity

Download the C# language library from the repository [game-dialog-lang](https://github.com/bitpatch/game-dialog-lang) or add it as a submodule.

Create a simple script `script.gds` and you can immediately test it right inside VS Code without launching the game:

```python
playerName = "Arthur"
reputation = 75

<< "Welcome, traveler!"

if reputation > 50
    << "Good to see you again, " + playerName + "!"
else
    << "I don't know you."
```

You will get output:

```
Welcome, traveler!
Good to see you again, Arthur!
```

After that create a simple MonoBehaviour script:

```csharp
using BitPatch.DialogLang;

var script = @"
playerName = ""Arthur""
<< ""Hello, "" + playerName + ""!""
<< ""How are you doing?""
";

var dialog = new Dialog();
foreach (var line in dialog.Execute(script))
{
    Console.WriteLine(line);
}
```

Done! You can do something like this for Godot too. Good luck!
