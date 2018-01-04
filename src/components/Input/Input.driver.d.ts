export declare const inputDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    isDisabled: () => any;
    isFocus: () => boolean;
    isReadOnly: () => any;
    getPlaceholder: () => any;
    getAutocomplete: () => any;
    isRequired: () => any;
    blur: () => any;
    click: () => any;
    doubleClick: () => any;
    focus: () => any;
    keyDown: () => any;
    keyUp: () => any;
    getTabIndex: () => any;
    getType: () => any;
    getValue: () => any;
    setValue: (value: any) => void;
};
