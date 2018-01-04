export declare const dropdownDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    isTargetElementExists: () => boolean;
    isContentElementExists: () => boolean;
    mouseEnter: () => any;
    mouseLeave: () => any;
    click: () => any;
    targetElement: () => any;
    clickOptionAt: (index: any) => any;
};
