import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducers/header";
import spotReducer from "./reducers/spot";
import vehicleReducer from "./reducers/vehicle";

const store = configureStore({
  reducer: {
    header: headerReducer,
    spots: spotReducer,
    vehicles: vehicleReducer,
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
