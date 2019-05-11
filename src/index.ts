import { Dictionary } from "./CommonDataStructure/Dictionary";
import { List } from "./CommonDataStructure/List";

let list:List<number>=new List();
list.Add(2);
list.Add(3);
list.Add(6);
console.log(list.Count());
list.Add(33);
list.Add(34);
list.Remove(0);
console.log(list.Count());

let a = 1;
let b = 2;
console.log("hello ts2");