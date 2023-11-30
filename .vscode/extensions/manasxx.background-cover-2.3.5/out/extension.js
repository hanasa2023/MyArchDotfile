'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const PickLIst_1 = require("./PickLIst");
const vsHelp_1 = require("./vsHelp");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // 创建底部按钮
    let backImgBtn = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -999);
    backImgBtn.text = '$(file-media)';
    backImgBtn.command = 'extension.backgroundCover.start';
    backImgBtn.tooltip = 'Switch background image / 切换背景图';
    PickLIst_1.PickList.autoUpdateBackground();
    backImgBtn.show();
    let randomCommand = vscode.commands.registerCommand('extension.backgroundCover.refresh', () => { PickLIst_1.PickList.randomUpdateBackground(); });
    let startCommand = vscode.commands.registerCommand('extension.backgroundCover.start', () => { PickLIst_1.PickList.createItemLIst(); });
    context.subscriptions.push(startCommand);
    context.subscriptions.push(randomCommand);
    // 首次打开-提示语
    let openVersion = context.globalState.get('ext_version');
    let ex = vscode.extensions.getExtension('manasxx.background-cover');
    let version = ex ? ex.packageJSON['version'] : '';
    let title = ex ? ex.packageJSON['one_title'] : '';
    if (openVersion != version && title != "") {
        context.globalState.update('ext_version', version);
        vsHelp_1.default.showInfoWxChat('🐶🐷🐔🦊加入开发者微信群聊🐯🐮🐹🐽❓');
    }
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map