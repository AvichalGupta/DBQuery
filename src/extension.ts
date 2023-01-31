import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('dbquery.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from DBQuery!');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
