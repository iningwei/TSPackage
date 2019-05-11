//不借用TypeScript的容器，实现 单向泛型链表

class Item<T> {
    value: T = null;
    next: Item<T> = null;

    constructor(private _value: T, private _next: Item<T>) {
        this.value = _value;
        this.next = _next;
    }
}



export class List<T> {

    private head: Item<T>;
    constructor() {
        this.head = null;
    }

    private count: number = 0;
    /**
     * 链表中增加一项数据
     * @param item 项
     */
    public Add(item: T) {
        let newNode = new Item<T>(item, null);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            //头结点数据不为空
            //则从头结点的指针访问下一个节点，当指针指向的数据为空时，说明查询到末端
            //此时把指针指向这个新加入的节点即可
            let tmp = this.head;

            while (true) {
                if (tmp.next != null) {
                    tmp = tmp.next;
                }
                else {
                    break;
                }
            }
            tmp.next = newNode;
        }

        this.count++;
    }

    /**
     * 在指定位置往列表中插入数据项
     * @param value 数据项
     * @param index 指定位置
     */
    public Insert(value: T, index: number): boolean {
        if (index < 0 || index > this.count  - 1) {
            console.error("insert error, index:" + index + " may <0 or >count-1, if index>count-1 suggest you use Add()");
            return false;
        }

        let newNode = new Item<T>(value, null);
        if (index == 0) {//新节点为头结点
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let tmp = this.head;
            for (let i = 1; i < index; i++) {//循环找到插入位置的前一个节点
                tmp = tmp.next;
            }
            let oldNext = tmp.next;
            tmp.next = newNode;
            newNode.next = oldNext;
        }

        this.count++;
        return true;
    }

    /**
     * 移除链表中指定位置的数据项      
     * @param index 指定位置
     */
    public Remove(index: number): boolean {
        if (index < 0 || index > this.count  - 1) {
            console.error("remove error,index:" + index + ", may <0 or >count-1");
            return false;
        }

        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            let tmp = this.head;
            let targetNode = null;
            for (let i = 1; i < index; i++) {
                tmp = tmp.next;
            }
            targetNode = tmp.next;
            tmp.next = targetNode.next;
            targetNode = null;
        }
        this.count--;
        return true;
    }

    /**
 * 根据位置获得Item
 * @param index 位置
 */
    private getItem(index: number): Item<T> {
        if (index < 0 || index > this.count  - 1) {
            console.error("GetNode error,index:" + index + ", may <0 or >count-1");
            return null;
        }

        if (index == 0) {
            return this.head;
        }
        else {
            let tmp = this.head;
            for (let i = 0; i < index; i++) {
                tmp = tmp.next;
            }
            return tmp;
        }
    }





    /**
     * 根据位置获得值
     * @param index 位置
     */
    public Get(index: number): T {
        let r = this.getItem(index);
        if (r != null) {
            return r.value;
        }
        return null;
    }

    /**
     * 更新链表中数据
     * @param index 位置
     * @param item 新值
     */
    public Set(index: number, item: T): boolean {
        let tmp = this.GetItem(index);
        if (tmp != null) {
            tmp.value = item;
        }
        else {
            return false;
        }

        return true;
    }

    /**
     * 清除所有数据
     */
    public Clear() {
        this.head = null;
        this.count = 0;
    }



    /**
     * get属性获取链表长度
     */
    public Count(): Number {
        return this.count;
    }
    
//TODO:倒置

}
