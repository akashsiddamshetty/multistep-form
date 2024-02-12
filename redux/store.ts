// store.ts

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { formReducer } from "./formSlice";


// Create the Redux store
export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

// Export a hook for using the dispatch function
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Export a hook for accessing the Redux store's state
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
