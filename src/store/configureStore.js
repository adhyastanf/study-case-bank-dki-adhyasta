import { createStore, applyMiddleware } from 'redux';
// import { createWrapper } from 'next-redux-wrapper';
import { thunk } from 'redux-thunk';
import rootReducer from '@/reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));

// export const wrapper = createWrapper(makeStore);
