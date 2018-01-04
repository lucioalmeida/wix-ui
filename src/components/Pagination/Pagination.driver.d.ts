export declare const paginationDriverFactory: ({element, eventTrigger}: {
    element: HTMLElement;
    eventTrigger: any;
}) => {
    root: HTMLElement;
    exists: () => boolean;
    amountOfPages: number;
    getPagesList: () => string[];
    getPage: (idx?: number) => Element;
    getCurrentPage: () => Element;
    getNavButton: (btnName: "first" | "last" | "next" | "previous") => HTMLButtonElement;
    click: (elmnt: Element) => void;
    clickOnNavButton: (btnName: string) => void;
    getPageInput: () => HTMLInputElement;
    getTotalPagesField: () => Element;
    changeInput: (newValue: string) => void;
    inputKeyDown: (keyCode: number) => void;
    inputBlur: () => void;
};
