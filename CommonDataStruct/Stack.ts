interface IStack<T> {
    Top(): T;
    Push(item: T);
    Pop(): T;
    Empty(): boolean;//is the stack empty
    Size(): number;
}

/**
 * Item in stack
 */
class Item<T>{
    private _value: T;
    private _next: Item<T>;
    constructor(value: T, next: Item<T> = null) {
        this._value = value;
        this._next = next;
    }
    set Value(value: T) {
        this._value = value;
    }
    get Value(): T {
        return this._value;
    }

    set Next(next: Item<T>) {
        this._next = next;
    }
    get Next(): Item<T> {
        return this._next;
    }
}

export default class Stack<T> implements IStack<T>{
    private _header: Item<T>;
    private _size: number = 0;
    constructor() {
        this._header = new Item<T>(null);
    }


    Top(): T {
        if (this._size == 0) {
            return null;
        }
        return this._header.Next.Value;
    }

    Push(item: T) {
        let newItem = new Item<T>(item);
        newItem.Next = this._header.Next;
        this._header.Next = newItem;
        this._size++;
    }
    Pop(): T {
        if (this._size == 0) {
            return null;
        }

        let target = this._header.Next;
        this._header.Next = target.Next;
        this._size--;
        target.Next = null;
        return target.Value;
    }

    Empty(): boolean {
        return this._size === 0;
    }
    Size(): number {
        return this._size;
    }
}
