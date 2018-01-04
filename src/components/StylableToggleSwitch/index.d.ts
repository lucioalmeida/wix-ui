/// <reference types="react" />
import * as React from 'react';
export declare function withStylable(CoreComponent: React.ComponentClass<any>, stylesheet: RuntimeStylesheet, getState: (object) => StateMap): {
    new (props?: any, context?: any): {
        render(): React.ReactElement<any>;
        setState<K extends never>(state: React.ComponentState | ((prevState: Readonly<React.ComponentState>, props: any) => React.ComponentState | Pick<React.ComponentState, K>) | Pick<React.ComponentState, K>, callback?: () => any): void;
        forceUpdate(callBack?: () => any): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: Readonly<React.ComponentState>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<React.ComponentState>, nextContext: any): boolean;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<React.ComponentState>, nextContext: any): void;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<React.ComponentState>, prevContext: any): void;
        componentWillUnmount?(): void;
    };
    propTypes?: React.ValidationMap<any>;
    contextTypes?: React.ValidationMap<any>;
    childContextTypes?: React.ValidationMap<any>;
    defaultProps?: Partial<any>;
    displayName?: string;
};
export declare const StylableToggleSwitch: {
    new (props?: any, context?: any): {
        render(): React.ReactElement<any>;
        setState<K extends never>(state: React.ComponentState | ((prevState: Readonly<React.ComponentState>, props: any) => React.ComponentState | Pick<React.ComponentState, K>) | Pick<React.ComponentState, K>, callback?: () => any): void;
        forceUpdate(callBack?: () => any): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: Readonly<React.ComponentState>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<React.ComponentState>, nextContext: any): boolean;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<React.ComponentState>, nextContext: any): void;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<React.ComponentState>, prevContext: any): void;
        componentWillUnmount?(): void;
    };
    propTypes?: React.ValidationMap<any>;
    contextTypes?: React.ValidationMap<any>;
    childContextTypes?: React.ValidationMap<any>;
    defaultProps?: Partial<any>;
    displayName?: string;
};
