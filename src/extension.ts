// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { DataProvider } from './dataProvider';
import { ApiService } from './service';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const service = new ApiService();
	vscode.window.registerTreeDataProvider('snippetExplorer', new DataProvider(service));
	let showcontent = vscode.commands.registerCommand('extension.click', (hasdId, content) => { });
	const panel = vscode.window.createWebviewPanel(
		'Webview', // viewType
		"stockWebview", // 视图标题
		vscode.ViewColumn.One, // 显示在编辑器的哪个部位
		{
			enableScripts: true, // 启用JS，默认禁用
			retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
		}
	);
	
	context.subscriptions.push(showcontent);
}

// This method is called when your extension is deactivated
export function deactivate() {}
