/// <reference types="react" />
import * as React from 'react';
import PopperJS from 'popper.js';
export interface PopoverProps {
    shown?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}
export interface SharedPopoverProps {
    placement?: PopperJS.Placement;
}
export declare type PopoverType = React.SFC<PopoverProps & SharedPopoverProps> & {
    Element?: React.SFC;
    Content?: React.SFC;
};
declare const Popover: PopoverType;
export default Popover;
