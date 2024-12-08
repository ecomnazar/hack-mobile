import { modalSlice } from "@/entities/ui/modal";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({
    modal: modalSlice.reducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
