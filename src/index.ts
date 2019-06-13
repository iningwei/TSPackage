import { Dictionary } from "./Generic/Dictionary";
import { List } from "./Generic/List";
import Debug from "./Debug";

// let list: List<number> = new List();
// list.Add(2);
// list.Add(3);
// list.Add(6); 

// list.Add(33);
// list.Add(34);
// list.Remove(0);
// list.Insert(99, 1);
// list.Insert(100, 0);
// list.Set(1, 1000);
// console.log("2------>count:" + list.Count)
// for (let i = 0; i < list.Count; i++) {
//     const element = list.Get(i);
//     console.log(element);
// }

// console.log("-->")
// list.Reverse();

// console.log("3------>count:" + list.Count)
// for (let i = 0; i < list.Count; i++) {
//     const element = list.Get(i);
//     console.log(element);
// }


let dic: Dictionary<number, number> = new Dictionary<number, number>();
dic.Add(1, 444);
dic.Add(2, 213);

console.log("test:" + dic[2]);
dic[2] = 999;
let keys = dic.Keys;
for (let i = 0; i < keys.length; i++) {
    console.log("key:" + keys[i] + ", value:" + dic[keys[i]]);
}

