export declare const badgeDriverFactory: ({element, eventTrigger}: {
    element: any;
    eventTrigger: any;
}) => {
    exists: () => boolean;
    getType: () => any;
    getContent: () => any;
    styles: {
        getHeight: () => string;
        getPadding: () => string;
        getColor: () => string;
        getOpacity: () => string;
        getBorderRadius: () => string;
        getFontSize: () => string;
        getLineHeight: () => string;
        getTextDecoration: () => string;
        getCursor: () => string;
    };
};
