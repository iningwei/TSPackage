import { IEventDispatcher } from "./IEventDispatcher";
import { Dictionary } from "../Generic/Dictionary";
import Debug from "../Debug/Debug";

//see this:https://stackoverflow.com/questions/12881212/does-typescript-support-events-on-classes
//and this:https://github.com/KeesCBakker/Strongly-Typed-Events-for-TypeScript


export class EventDispatcher implements IEventDispatcher {
    private static instance: EventDispatcher = null;
    public static get Instance(): EventDispatcher {
        if (this.instance == null) {
            this.instance = new EventDispatcher();
        }
        return this.instance;
    }

    private allHandlers: Dictionary<number, ((...paras: any[]) => void)[]> = new Dictionary();

    addEventListener(id: number, handler: (...paras: any[]) => void) {
        if (this.allHandlers.ContainsKey(id)) {
            this.allHandlers.GetValue(id).push(handler);
        }
        else {
            this.allHandlers.Add(id, [handler]);
        }
    }
    removeEventListener(id: number, handler: (...paras: any[]) => void) {
        if (this.allHandlers.ContainsKey(id)) {
            for (let i = this.allHandlers.GetValue(id).length; i >= 0; i--) {
                if (this.allHandlers.GetValue(id)[i] == handler) {

                    this.allHandlers.GetValue(id).splice(i, 1);
                }
            }
        }
        else {
            Debug.Error("removeEventListener failed. 不存在该event:" + id);
        }
    }
    removeSpecificListeners(id: number) {
        if (this.allHandlers.ContainsKey(id)) {
            this.allHandlers.Remove(id);
        }
        else {
            Debug.Error("removeSpecificListeners failed. 不存在该event:" + id);
        }
    }
    removeAllEventListeners() {
        this.allHandlers.Clear();
    }
    dispatchEvent(id: number, ...paras: any[]) {
        if (this.allHandlers.ContainsKey(id)) {
            let funcs = this.allHandlers.GetValue(id);
            for (let i = 0; i < funcs.length; i++) {
                const element = funcs[i];
                element(...paras);
            }
        }
        else {
            Debug.Error("dispatchEvent failed, no event:" + id);
        }
    }



}
