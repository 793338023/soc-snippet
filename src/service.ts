import {data} from "./data";
import { Item } from "./item";

export class ApiService {
  async getItems(): Promise<Array<Item>> {
    console.log("fetching  data……");
   
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const joke = {
        content: data[i].content,
        hashId: data[i].hashId,
        time: data[i].updatetime,
      };
      items.push(new Item(joke));
    }
    return items;
  }
}
