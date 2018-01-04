export declare const tooltipDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    isTargetElementExists: () => boolean;
    isContentExists: () => boolean;
    mouseEnter: () => any;
    styles: {
        getBackgroundColor: () => string;
        getBorderWidth: () => string;
        getBorderStyle: () => string;
        getBorderColor: () => string;
        getBorderRadius: () => string;
        getContentPadding: () => string;
    };
};
