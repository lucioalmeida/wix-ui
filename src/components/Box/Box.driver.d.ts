export interface BoxDriverFactoryInput {
    element: HTMLElement;
    componentInstance: any;
}
export declare const boxDriverFactory: ({element}: BoxDriverFactoryInput) => {
    exists: () => boolean;
    getFlexDirection: () => string;
    getAlignment: () => string;
    getChildStyle: (idx: number) => CSSStyleDeclaration;
};
