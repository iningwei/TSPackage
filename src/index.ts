import { Dictionary } from "./Generic/Dictionary";
import { List } from "./Generic/List";
import Debug from "./Debug";
import StringExt from "./Extention/StringExt";

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


// let dic: Dictionary<number, number> = new Dictionary<number, number>();
// dic.Add(1, 444);
// dic.Add(2, 213);
// dic.Add(3, 223);
// dic.Add(4, 243);
// dic.Add(5, 2113);

// dic.Remove(4);
// console.log("test:" + dic[2]);
// console.log("test:" + dic[4]);
// dic[2] = 999;
// let keys = dic.Keys;
// for (let i = 0; i < keys.length; i++) {
//     console.log("key:" + keys[i] + ", value:" + dic[keys[i]]);
// }




// ----------------------->
// let list: List<number> = new List<number>();
// list.Add(1);
// list.Add(31);
// list.Add(1);
// list.Add(2);
// list.Add(3);
// list.Add(3);
// list.Add(392);
// list.Remove(3);
// list.RemoveAt(3);
// list.SetAt(0,1234);


// console.log("x0:" + list.GetAt(0));
// console.log("x1:" + list.Remove(38));
// console.log("x2:" + list.Contains(999));
// console.log("x3:" + list.IndexOf(392));
// console.log("x4:" + list.Contains(31));


// for (let i = 0; i < list.Count; i++) {
//     console.log(list.GetAt(i));
// }

// console.log("------------------>");
// list.Log();



// ------>枚举
// enum Color{red,green,blue,black=12,grown,yellow="yellow",fuck="hehe"};
// let color:Color=Color.red;
// let cc=Color[3];
// Debug.Log(color.toString()+", "+Color[color]+", "+Color[4]+", "+Color.yellow+", "+Color.black+", "+Color["hehe"]);


//---------->object类型为非基本类型外的其它类型，用来表示复杂类型
// declare function create(o: object | null): void;
// create({prop:0});
// create(null);
// create(42);//error
// create("string");//error

let a = "hello";
let b = StringExt.PadLeft2(a, 8, 'X');
let c = StringExt.PadLeft2(a, 3, 'x');
Debug.Log("b:" + b);
Debug.Log("c:" + c);



