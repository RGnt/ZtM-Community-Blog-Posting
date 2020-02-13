import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

export default ({ children }) => <Provider store={store}>{children}</Provider>;
