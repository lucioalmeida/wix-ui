/// <reference types="react" />
import * as React from 'react';
import { SharedPopoverProps } from '../Popover';
import { Option } from './DropdownContent';
import { CLICK_TYPE, HOVER_TYPE, SINGLE_SELECT_TYPE, MULTI_SELECT_TYPE } from './constants';
export interface SharedDropdownProps extends SharedPopoverProps {
    openTrigger?: CLICK_TYPE | HOVER_TYPE;
    options: Array<Option>;
    onSelect?: (option: Option, evt: React.MouseEvent<HTMLDivElement>, selectedIds: Array<string | number>) => void;
    onDeselect?: (option: Option, evt: React.MouseEvent<HTMLDivElement>, selectedIds: Array<string | number>) => void;
    mode?: SINGLE_SELECT_TYPE | MULTI_SELECT_TYPE;
    initialSelectedIds?: Array<string | number>;
}
declare const _default: any;
export default _default;
