/// <reference types="react" />
import * as React from 'react';
export declare const buildChildrenObject: <T>(children: Object, childrenObject: T) => T;
export interface ElementProps {
    children: any;
}
export declare const createComponentThatRendersItsChildren: (displayName: any) => React.StatelessComponent<ElementProps>;
