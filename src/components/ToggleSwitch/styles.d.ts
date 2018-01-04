export declare const styles: (theme: Partial<{
    rootWidth: string;
    rootHeight: string;
    transitionSpeed: string;
    borderRadius: string;
    labelMovementRange: string;
    outerLabelWidth: string;
    outerLabelHeight: string;
    innerLabelWidth: string;
    innerLabelHeight: string;
    innerLabelBackgroundColor: string;
    backgroundColor: string;
    backgroundColorChecked: string;
    backgroundColorDisabled: string;
    backgroundColorHover: string;
    backgroundColorFocus: string;
    focusOutline: string;
    color: string;
    colorChecked: string;
    colorDisabled: string;
    colorCheckedDisabled: string;
    colorHover: string;
    colorFocus: string;
    toggleIconWidth: string;
    toggleIconHeight: string;
    toggleIconDisplay: string;
    outerLabelBorder: string;
    outerLabelBorderChecked: string;
    outerLabelBorderDisabled: string;
    outerLabelBorderHover: string;
    outerLabelBorderHoverChecked: string;
    innerLabelBorder: string;
    innerLabelBorderChecked: string;
    innerLabelBorderDisabled: string;
    innerLabelBorderHover: string;
    innerLabelBorderHoverChecked: string;
}>) => {
    root: {
        [x: string]: string | {
            display: string;
        } | {
            [x: string]: {
                backgroundColor: string;
                border: string;
            } | {
                border: string;
                left: string;
                '& > $toggleIcon': {
                    transition: string;
                    '& path': {
                        fill: string;
                    };
                };
            };
        } | {
            [x: string]: {
                backgroundColor: string;
                cursor: string;
                border: string;
            } | {
                cursor: string;
                border: string;
            } | {
                fill: string;
            };
        } | {
            [x: string]: {
                backgroundColor: string;
                border: string;
            } | {
                border: string;
            } | {
                fill: string;
            };
        } | {
            outline: string;
        };
        display: string;
        alignItems: string;
        width: string;
        height: string;
        position: string;
        outline: string;
        '& > input[type=checkbox]': {
            display: string;
        };
    };
    outerLabel: {
        display: string;
        width: string;
        height: string;
        cursor: string;
        backgroundColor: string;
        border: string;
        boxSizing: string;
        '-webkit-border-radius': string;
        '-moz-border-radius': string;
        borderRadius: string;
        transition: string;
    };
    innerLabel: {
        display: string;
        width: string;
        height: string;
        position: string;
        left: string;
        zIndex: number;
        textAlign: string;
        alignItems: string;
        justifyContent: string;
        cursor: string;
        backgroundColor: string;
        boxShadow: string;
        top: string;
        transform: string;
        border: string;
        boxSizing: string;
        '-webkit-border-radius': string;
        '-moz-border-radius': string;
        borderRadius: string;
        transition: string;
    };
    toggleIcon: {
        display: string;
        width: string;
        height: string;
        transition: string;
        '& path': {
            fill: string;
        };
    };
};
