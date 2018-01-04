/// <reference types="react" />
import * as React from 'react';
import { OPTION_TYPE, SEPARATOR_TYPE } from './constants';
export interface Option {
    id: number;
    value: any;
    type: OPTION_TYPE | SEPARATOR_TYPE;
    isDisabled: boolean;
}
export interface DropdownContentProps {
    options: Array<Option>;
    onOptionClick: (option: Option, evt: React.MouseEvent<HTMLDivElement>) => void;
    selectedIds: Array<string | number>;
}
export interface DropdownContentState {
    hoveredId: string | number;
}
declare class DropdownContent extends React.PureComponent<DropdownContentProps, DropdownContentState> {
    static defaultProps: {
        options: any[];
        onOptionClick: () => any;
    };
    static propTypes: {
        options: any;
        onOptionClick: any;
        selectedIds: any;
    };
    constructor(props: any);
    _onOptionClick(option: any, evt: any): void;
    _setHoveredId(index: any): void;
    _renderOption(option: any, index: any): JSX.Element;
    render(): JSX.Element;
}
export default DropdownContent;
