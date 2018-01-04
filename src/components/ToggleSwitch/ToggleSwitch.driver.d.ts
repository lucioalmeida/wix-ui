export declare const toggleSwitchDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    click: () => void;
    isChecked: () => any;
    isDisabled: () => any;
    getToggleIcon: () => any;
    getId: () => any;
    getRootStyles: () => CSSStyleDeclaration;
    getOuterLabelStyles: () => CSSStyleDeclaration;
    getInnerLabelStyles: () => CSSStyleDeclaration;
    getToggleIconStyles: () => CSSStyleDeclaration;
    styles: {
        getRootDisplay: () => string;
        getBorderRadius: () => string;
    };
};
