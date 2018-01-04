export declare type BadgeState = Partial<{
    color: string;
    backgroundColor: string;
    borderColor: string;
}>;
export declare type BadgeTheme = Partial<BadgeState & {
    display: string;
    justifyContent: string;
    minWidth: string;
    width: string;
    height: string;
    padding: string;
    contentPadding: string;
    borderRadius: string;
    border: string;
    outline: string;
    opacity: string;
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    fontStyle: string;
    fontWeight: string;
    textDecoration: string;
    cursor: string;
    hover: BadgeState;
}>;
export declare const core: BadgeTheme;
