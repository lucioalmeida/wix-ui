export declare const paginationDriverFactory: (component: any) => {
    element: () => any;
    getElementLocation: (dataHook: any) => Promise<{
        x: number;
        y: number;
    }>;
    getElementSize: (dataHook: any) => Promise<{
        width: number;
        height: number;
    }>;
};
