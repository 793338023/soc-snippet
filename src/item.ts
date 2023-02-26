import { TreeItem, TreeItemCollapsibleState } from "vscode";

export interface IItem {
  content: string;
  hashId: string;
  time: string;
}

export class Item extends TreeItem {
  constructor(info: IItem) {
    super("", TreeItemCollapsibleState.None);
    this.label = "笑话";
    this.id = info.hashId;
    this.description = "by test";
    this.command = {
      title: "话题",
      command: "extension.click",
      arguments: [info.hashId, info.content],
    };
    this.tooltip = "点击查看详情";
  }
}
