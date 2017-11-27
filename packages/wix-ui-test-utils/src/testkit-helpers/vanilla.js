import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

export const testkitFactoryCreator = driverFactory => ({wrapper, dataHook}) => {
  const element = wrapper.querySelector(`[data-hook='${dataHook}']`);
  return driverFactory({element, wrapper});
};

export const isTestkitExists = (Element, testkitFactory) => {
  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const elementToRender = React.cloneElement(Element, {dataHook});
  const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>{elementToRender}</div>));
  const testkit = testkitFactory({wrapper, dataHook});
  return testkit.exists();
};