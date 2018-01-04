declare const inputDriverFactory: (component: any) => {
    element: () => any;
    enterText: (text: any) => any;
    getText: () => any;
};
export default inputDriverFactory;
