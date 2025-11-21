import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('Game Dialog Script extension is now active');

    const disposable = vscode.commands.registerCommand('gds.run', () => {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const document = editor.document;
        
        if (document.languageId !== 'gds') {
            vscode.window.showErrorMessage('Current file is not a Game Dialog Script file');
            return;
        }

        // Save the file before running
        document.save().then(() => {
            const filePath = document.fileName;
            const fileName = path.basename(filePath);
            
            // Create output channel for gdialog output
            const outputChannel = vscode.window.createOutputChannel('Game Dialog Script');
            outputChannel.clear();
            outputChannel.show(true);
            
            outputChannel.appendLine(`Running: gdialog ${fileName}`);
            outputChannel.appendLine('─'.repeat(50));
            
            // Execute gdialog command
            exec(`gdialog ${filePath}`, (error, stdout, stderr) => {
                if (stderr) {
                    outputChannel.appendLine(stderr);
                }
                
                if (stdout) {
                    outputChannel.appendLine(stdout);
                }
                
                if (error) {
                    outputChannel.appendLine('─'.repeat(50));
                    outputChannel.appendLine(`Process exited with code ${error.code}`);
                    if (error.code !== 0) {
                        vscode.window.showErrorMessage(`Script execution failed with exit code ${error.code}`);
                    }
                } else {
                    outputChannel.appendLine('─'.repeat(50));
                    outputChannel.appendLine('Execution completed successfully');
                }
            });
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
