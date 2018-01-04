/// <reference types="react" />
import * as React from 'react';
export declare type ToggleSwitchClasses = {
    root: string;
    outerLabel: string;
    innerLabel: string;
    toggleIcon: string;
};
export interface ToggleSwitchProps {
    checked?: boolean;
    disabled?: boolean;
    onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
    classes?: ToggleSwitchClasses;
    id?: string;
}
/**
 * Toggle Switch
 */
declare class ToggleSwitch extends React.PureComponent<ToggleSwitchProps> {
    static displayName: string;
    id: string;
    private toggle;
    static propTypes: {
        checked: any;
        onChange: any;
        disabled: any;
        classes: any;
        id: any;
    };
    static defaultProps: {
        checked: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    _listenToSpace: (e: any) => void;
    _handleChange: (e: any) => void;
    render(): JSX.Element;
}
export default ToggleSwitch;
