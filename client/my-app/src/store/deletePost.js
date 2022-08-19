import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const deletePost = createAsyncThunk(
    "post/deletePost",
async (_id, { rejectWithValue, dispatch }) => {
    try {
        const response = await fetch(
       `http://localhost:5000/api/posts/${_id}`,{
        method: 'DELETE',
       }
        );
        const data = await response.json();
        return data;
         } catch (error) {
            return rejectWithValue(error.message);
          }
        }
)
export const deletePostSlice = createSlice({
    name:"post",
    initialState: {
        posts:[],
        loading: true,
        error: null,
      },
      reducers: {},
      extraReducers: {
        [deletePost.pending]: (state) => {
          state.loading = true;
          state.error = null;
        },
        [deletePost.fulfilled]: (state, action) => {
          state.loading = false;
          state.posts = state.posts.filter(post=>post._id !== action.payload)
        },
        [deletePost.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },
    });
    
    export default deletePostSlice.reducer;