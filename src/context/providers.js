'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/configureStore';

const Providers = ({ children }) => {
  //   const store = wrapper.useWrappedStore();
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
