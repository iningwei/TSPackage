class Item<T>{
    public value: T = null;
    public next: Item<T> = null;
    public pre: Item<T> = null;
    constructor(private _value: T, private _pre: Item<T> = null, private _next: Item<T>) {
        this.value = _value;
        this.next = _next;
        this.pre = _pre;
    }    
}

export class DoubleList<T>{
    /**
     * 头指针
     */
    private header:Item<T>;

    /**
     * 尾指针
     */
    private trail:Item<T>;
}