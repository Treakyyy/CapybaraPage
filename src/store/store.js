import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from '../features/scroll/scrollSlice';
import inputErrorsReducer from '../features/inputErrors/inputErrorsSlice'

export default configureStore({
  reducer: {
    scroll: scrollReducer,
    inputErrors: inputErrorsReducer
  },
});