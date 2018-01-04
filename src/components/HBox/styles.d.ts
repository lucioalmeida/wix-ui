import { HBoxTheme } from './theme';
export declare const styles: (theme: HBoxTheme) => {
    hRoot: {
        display: string;
        alignItems: string;
        height: string;
        width: string;
        '& >:not(:last-child)': {
            marginRight: string;
        };
    };
};
