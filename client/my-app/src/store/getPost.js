import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "post/getPost",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/posts"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
export const Post = createSlice({
name:"post",
initialState: {
    posts:[],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts.push(action.payload)
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default Post.reducer;