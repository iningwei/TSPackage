//单向泛型链表


class Item<T> {
    public value: T = null;
    public next: Item<T> = null;

    constructor(private _value: T, private _next: Item<T> = null) {
        this.value = _value;
        this.next = _next;
    }
}



export class List<T> {
    private header: Item<T>;//头指针

    constructor() {
        this.header = new Item(null, null);
    }

    private count: number = 0;
    /**
     * 链表中增加一项数据
     * @param item 项
     */
    public Add(item: T) {
        let newNode = new Item<T>(item);

        let last: Item<T> = this.header;
        while (last.next != null) {
            last = last.next;
        }
        last.next = newNode;
        this.count++;
    }

    /**
     * 在指定位置往列表中插入数据项
     * @param value 数据项
     * @param index 指定位置
     */
    public Insert(value: T, index: number): boolean {
        if (index < 0 || index > this.count - 1) {
            console.error("insert error, index:" + index + " may <0 or >count-1, if index>count-1 suggest you use Add()");
            return false;
        }

        let tmp;
        if (index == 0) {
            tmp = this.header;
        }
        else {
            tmp = this.getItem(index - 1);//插入位置的前一个节点
        }


        let newNode = new Item<T>(value);
        let oldNext = tmp.next;
        tmp.next = newNode;
        newNode.next = oldNext;

        this.count++;
        return true;
    }

    /**
     * 移除链表中指定位置的数据项      
     * @param index 指定位置
     */
    public Remove(index: number): boolean {
        if (index < 0 || index > this.count - 1) {
            console.error("remove error,index:" + index + ", may <0 or >count-1");
            return false;
        }

        let target = this.getItem(index);
        this.header.next = target.next;


        this.count--;
        return true;
    }

    /**
 * 根据位置获得Item
 * @param index 位置
 */
    private getItem(index: number): Item<T> {
        if (index < 0 || index > this.count - 1) {
            console.error("getItem error,index:" + index + ", may <0 or >count-1");
            return null;
        }


        let tmp = this.header;
        for (let i = 0; i <= index; i++) {
            tmp = tmp.next;
        }
        return tmp;
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
     * @param value 新值
     */
    public Set(index: number, value: T): boolean {
        let tmp = this.getItem(index);
        if (tmp != null) {
            tmp.value = value;
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
        this.header.next = null;
        this.count = 0;
    }



    /**
     * get属性获取链表长度
     */
    public Count(): Number {
        return this.count;
    }

    public IsEmpty(): boolean {
        return this.count === 0;
    }


    //TODO:
    public Reverse() {
        let tmp: Item<T> = this.header.next;
        let oldNext = tmp.next;
        while (tmp != null && oldNext != null) {
            let oldTmp = tmp;
            tmp = oldNext;
            oldNext = oldNext.next;
            tmp.next = oldTmp;
            if (oldTmp.next == tmp) {
                oldTmp.next = null;
            }
        }
        this.header.next = tmp;
    }
}
