export declare const buttonDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    click: () => any;
    mouseEnter: () => any;
    mouseLeave: () => any;
    getType: () => any;
    getTextContent: () => any;
    isDisabled: () => boolean;
    styles: {
        getMinWidth: () => string;
        getWidth: () => string;
        getHeight: () => string;
        getPadding: () => string;
        getBorderRadius: () => string;
    };
};
