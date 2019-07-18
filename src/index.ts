import Debug from "./SelfTool/Debug";
import { Sort } from "./SelfTool/Algorithm/Sort";
import { FinalRandom } from "./SelfTool/Tool/FinalRandom/FinalRandom";


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

// let a = "hello";
// let b = StringExt.PadLeft2(a, 8, 'X');
// let c = StringExt.PadLeft2(a, 3, 'x');
// Debug.Log("b:" + b);
// Debug.Log("c:" + c);



// let a = 1;
// let b = a;
// a = 3;
// Debug.Log("a:" + a + ", b:" + b);



// let c = { x1: 3, x2: 4 };
// let d = c;
// c.x1 = 111;
// Debug.Log("c:" + c.x1 + ", d:" + d.x1);


// let v = [2, 4];
// let [first, second] = v;
// Debug.Log(first + "," + second);

// function test(obj: { a: string, b?: number }): void {
//     let { a, b = 233 } = obj;
//     Debug.Log("a:" + a + ", b:" + b);
// }

// test({ a: "s" });



// let a = [1, 2];
// let b = [9, 0];
// let c = [22, ...a, ...b, 999];
// Debug.Log(c);
// a[0] = 89;
// Debug.Log("a:" + a);
// Debug.Log("c:" + c);





// console.time("1");
// let arr: number[] = [];
// for (let i = 0; i < 20000; i++) {
//     arr.push(FinalRandom.RandIntBetween(0, 10000));
// }
// console.timeEnd("1");
// Debug.Log("----->")

// console.time("2");
// Sort.Insert(arr);
// console.timeEnd("2");
// Debug.Log("Insert x a:" + arr);



function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
let r = getProperty(x, "a");
Debug.Log("r:" + r);

