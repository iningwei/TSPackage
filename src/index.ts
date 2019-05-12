import { Dictionary } from "./CommonDataStructure/Dictionary";
import { List } from "./CommonDataStructure/List";

let list:List<number>=new List();
list.Add(2);
list.Add(3);
list.Add(6);
console.log("1------>")
for (let i = 0; i < list.Count(); i++) {
    const element = list.Get(i);
    console.log(element);    
}

list.Add(33);
list.Add(34);
list.Remove(0);
list.Insert(99,1);
list.Insert(100,0);
list.Set(1,1000);
console.log("2------>")
for (let i = 0; i < list.Count(); i++) {
    const element = list.Get(i);
    console.log(element);    
}

list.Clear();
console.log("3------>")
for (let i = 0; i < list.Count(); i++) {
    const element = list.Get(i);
    console.log(element);    
}

 