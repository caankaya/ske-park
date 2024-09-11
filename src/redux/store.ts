import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducers/header";
import spotReducer from "./reducers/spot";

const store = configureStore({
  reducer: {
    header: headerReducer,
    spot: spotReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
