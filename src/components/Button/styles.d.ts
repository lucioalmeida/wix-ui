import { ButtonTheme } from './theme';
export declare const styles: (theme: ButtonTheme) => {
    button: {
        minWidth: string;
        width: string;
        height: string;
        padding: string;
        borderRadius: string;
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        fontStyle: string;
        fontWeight: string;
        textDecoration: string;
        color: string;
        background: string;
        borderColor: string;
        boxSizing: string;
        '-webkit-font-smoothing': string;
        textAlign: string;
        border: string;
        cursor: string;
        outline: string;
        transition: string;
        [contentSelector]: {
            display: string;
            height: string;
            padding: string;
            color: string;
            textDecoration: string;
        };
        '&:hover': {
            color: any;
            backgroundColor: any;
            borderColor: any;
            [contentSelector]: {
                color: any;
            };
        };
        '&:active': {
            color: any;
            backgroundColor: any;
            borderColor: any;
            [contentSelector]: {
                color: any;
            };
        };
        '&:disabled': {
            color: any;
            backgroundColor: any;
            borderColor: any;
            [contentSelector]: {
                color: any;
            };
            pointerEvents: string;
        };
    };
};
