import { configureStore } from '@reduxjs/toolkit';
import { user } from './reducers';

export default configureStore({ reducer: { user } });
