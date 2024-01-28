import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "../features/StudentApi";

const Store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});

export default Store;
