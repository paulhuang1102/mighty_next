import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./rootReducer";
import { rootEpic } from "./rootEpic";

const epicMiddleware = createEpicMiddleware();

export const makeStore = () => {
  const store =  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  epicMiddleware.run(rootEpic);

  return store;
};


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
