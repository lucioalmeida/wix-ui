import { BoxTheme } from './theme';
export declare const styles: (theme: BoxTheme) => {
    boxRoot: {
        display: string;
        width: string;
        height: string;
    };
    vertical: {
        alignItems: any;
        flexDirection: string;
        '& >:not(:last-child)': {
            marginBottom: any;
        };
    };
    horizontal: {
        alignItems: any;
        flexDirection: string;
        '& >:not(:last-child)': {
            marginRight: any;
        };
    };
    lastItemTakesRemainingWidth: {
        '& >:last-child': {
            flexGrow: number;
        };
        '& >:not(:last-child)': {
            flexGrow: number;
        };
    };
};
