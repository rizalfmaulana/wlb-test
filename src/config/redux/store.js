import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { blogsApi } from "./api/blogs/blogsApi";
import blogReducer from "./features/blogSlices";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    // [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogsApi.middleware),
});
