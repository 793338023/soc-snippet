import { TreeDataProvider, EventEmitter, Event } from "vscode";
import { Item } from "./item";
import { ApiService } from "./service";

export class DataProvider implements TreeDataProvider<Item> {
  private _onDidChangeTreeData: EventEmitter<any> = new EventEmitter<any>();
  readonly onDidChangeTreeData: Event<any> = this._onDidChangeTreeData.event;

  private service: ApiService;

  constructor(service: ApiService) {
    this.service = service;
  }

  refresh() {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: Item) {
    return element;
  }

  getChildren(element: Item) {
    return this.service.getItems();
  }

  getParent(element: Item) {
    return null;
  }
}
