/// <reference types="react" />
import * as React from 'react';
export declare class PaginationStory extends React.Component<{}, {
    currPage: number;
}> {
    state: {
        currPage: number;
    };
    handleChange: (e: any) => void;
    render(): JSX.Element;
}
