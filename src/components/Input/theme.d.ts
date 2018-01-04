export declare type InputTheme = {
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    fontStyle?: string;
    fontWeight?: string;
    textDecoration?: string;
    height?: string;
    padding?: string;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: string;
    hover?: {
        color?: string;
        backgroundColor?: string;
        borderColor?: string;
    };
    focus?: {
        color?: string;
        backgroundColor?: string;
        hoverBackgroundColor?: string;
        borderColor?: string;
    };
    disabled?: {
        color?: string;
        backgroundColor?: string;
        borderColor?: string;
        hoverBorderColor?: string;
    };
};
export declare const core: InputTheme;
