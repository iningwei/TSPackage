export class Dictionary<K, V>   {    
    private keys: K[] = [];
    private values: V[] = [];
    public constructor() { }


    /**
     * Dic中增加一项键值对(调用前需要判断是否已经存在该键，是的话不可再添加)
     * @param key key
     * @param value value
     */
    Add(key: K, value: V) {
        this.keys.push(key);
        this.values.push(value);
    }


    /**
     * 根据键名，移除键值对。（移除前，需要判断是否存在该键）
     * @param key 要移除的键
     */
    Remove(key: K) {
        let index = this.keys.indexOf(key, 0);
		if(index!=-1){
        this.keys.splice(index, 1);
        this.values.splice(index, 1);
		}
    }

    /**
     * 根据键获得值，若没有则返回null
     * @param key 目标键
     */
    TryGetValue(key: K): V {
        let index = this.keys.indexOf(key, 0);
        if (index != -1) {
            return this.values[index];
        }
        return null;
    }

    /**
     * 检测是否存在指定键的键值对
     * @param key 目标键
     */
    ContainsKey(key: K): boolean {
        for (let i = 0; i < this.keys.length; i++) {
            const element = this.keys[i];
            if (element == key) {
                return true;
            }
        }
        return false;
    }

    /**
     * 更新键值对（若键名不存在，则返回false）。特别是非引用类型的value，可以通过该方法实现更新。
     * 若键不存在，则返回false。更新成功，返回true
     * @param key 键名 
     * @param value 新值
     */
    SetDicValue(key: K, value: V): boolean {
        let index = this.keys.indexOf(key, 0);
        if (index != -1) {
            this.keys[index] = key;
            this.values[index] = value;
            return true;
        }
        return false;
    }

    /**
     * 获得所有的键
     */
    GetKeys(): K[] {
        return this.keys;
    }

    /**
     * 获得所有的值
     */
    GetValues(): V[] {
        return this.values;
    }

    /**
     * get属性获取Dic长度
     */
    get Count():number{
        return this.keys.length;
    }

    /**
     * 清空Dic
     */
    Clear() {
        this.keys = [];
        this.values = [];
    }
}
