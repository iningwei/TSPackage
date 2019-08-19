
export interface IEventDispatcher {
    addEventListener(id: number, handler: (...paras: any[]) => void);
    removeEventListener(id: number, handler: (...paras: any[]) => void);
    removeSpecificListeners(id: number);
    removeAllEventListeners();

    dispatchEvent(id: number, ...paras: any[]);

}
