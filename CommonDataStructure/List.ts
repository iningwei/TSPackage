//不借用TypeScript的容器，实现 单向泛型链表

//Node和ts自带类库同名，故用NodeX
class NodeX<T> {
    item: T = null;
    next: NodeX<T> = null;

    constructor(private i: T, private n: NodeX<T>) {
        this.item = i;
        this.next = n;
    }
}



export class List<T> {
    private head: NodeX<T>;
    constructor() {
        this.head = null;
    }

    /**
     * 链表中增加一项数据
     * @param item 项
     */
    public Add(item: T) {
        let newNode = new NodeX<T>(item, null);
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
    }

    /**
     * 在指定位置往列表中插入数据项
     * @param item 数据项
     * @param index 指定位置
     */
    public Insert(item: T, index: number): boolean {
        if (index < 0 || index > this.count() - 1) {
            console.error("insert error, index:" + index + " may <0 or >count-1, if index>count-1 suggest you use Add()");
            return false;
        }

        let newNode = new NodeX<T>(item, null);
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

        return true;
    }

    /**
     * 移除链表中指定位置的数据项      
     * @param index 指定位置
     */
    public Remove(index: number): boolean {
        if (index < 0 || index > this.count() - 1) {
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
        return true;
    }

    /**
 * 根据位置获得Node
 * @param index 位置
 */
    public GetNode(index: number): NodeX<T> {
        if (index < 0 || index > this.count() - 1) {
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
     * 修改节点数据
     * @param index 
     * @param item 
     */
    public SetNode(index: number, item: T): boolean {
        let tmpNode = this.GetNode(index);
        if (tmpNode != null) {
            tmpNode.item = item;
        }
        else {
            return false;
        }

        return true;
    }



    /**
     * 根据位置获得值
     * @param index 位置
     */
    public Get(index: number): T {
        let r = this.GetNode(index);
        if (r != null) {
            return r.item;
        }
        return null;
    }

    /**
     * 更新链表中数据
     * @param index 位置
     * @param item 新值
     */
    public Set(index: number, item: T): boolean {
        let tmp = this.GetNode(index);
        if (tmp != null) {
            tmp.item = item;
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
    }

    /**
     * 计算链表长度
     */
    private count(): number {
        let tmp = this.head;
        if (tmp != null) {
            let len = 1;
            while (true) {
                if (tmp.next != null) {
                    len = len + 1;
                    tmp = tmp.next;
                }
                else {
                    break;
                }
            }
            return len;
        }
        return 0;
    }

    /**
     * get属性获取链表长度
     */
    get Count(): Number {
        return this.count();
    }


}
