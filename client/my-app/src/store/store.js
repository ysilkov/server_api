import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./getPost";
import deletePostSlice  from "./deletePost";

export const store = configureStore({
  reducer: {
    posts: PostReducer,
    delete: deletePostSlice,
  },
});