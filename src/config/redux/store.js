import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "./api/blogs/blogsApi";

export const store = configureStore({
  reducer: {
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogsApi.middleware),
});
