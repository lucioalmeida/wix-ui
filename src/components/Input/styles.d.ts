import { InputTheme } from './theme';
export declare const styles: (theme: InputTheme) => {
    input: {
        color: string;
        background: string;
        borderColor: string;
        height: string;
        borderRadius: string;
        padding: string;
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        fontStyle: string;
        fontWeight: string;
        textDecoration: string;
        boxSizing: string;
        '-webkit-font-smoothing': string;
        textAlign: string;
        border: string;
        cursor: string;
        outline: string;
        transition: string;
        '&:hover': {
            color: string;
            backgroundColor: string;
            borderColor: string;
        };
        '&:focus': {
            color: string;
            backgroundColor: string;
            borderColor: string;
            '&:hover': {
                backgroundColor: string;
            };
        };
        '&:disabled': {
            color: string;
            backgroundColor: string;
            borderColor: string;
            '&:hover': {
                borderColor: string;
            };
        };
    };
};
