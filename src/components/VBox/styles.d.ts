import { VBoxTheme } from './theme';
export declare const styles: (theme: VBoxTheme) => {
    vRoot: {
        display: string;
        flexDirection: string;
        alignItems: string;
        width: string;
        height: string;
        '& >:not(:last-child)': {
            marginBottom: string;
        };
    };
};
