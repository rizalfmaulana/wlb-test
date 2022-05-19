import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
  try {
    const res = await axios.get(`http://localhost:5001/blogs`);
    return res;
  } catch (error) {
    return error;
  }
});

export const getBlog = createAsyncThunk("blog/getBlog", async (id) => {
  try {
    const res = await axios.get(`http://localhost:5001/blogs/${id}`);
    return res;
  } catch (error) {
    return error;
  }
});

export const deleteBlog = createAsyncThunk("blog/deleteBlog", async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5001/blogs/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const createBlog = createAsyncThunk("blog/createBlog", async (blogData) => {
  try {
    const res = await axios.post("http://localhost:5001/blogs", blogData);
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const updateBlog = createAsyncThunk("blog/updateBlog", async ({ id, editedBlogData }) => {
  try {
    const res = await axios.put(`http://localhost:5001/blogs/${id}`, editedBlogData);
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const categoryBlog = createAsyncThunk("blog/categoryBlog", async (category) => {
  try {
    const res = await axios.get(`http://localhost:5001/blogs?category=${category}`);
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const searchBlog = createAsyncThunk("blog/categoryBlog", async (search) => {
  try {
    const res = await axios.get(`http://localhost:5001/blogs?q=${search}`);
    return res;
  } catch (error) {
    console.log(error);
  }
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    blog: null,
    loading: false,
    error: null,
    edit: false,
  },
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload.edit;
      // state.body = action.payload.body;
    },
  },
  extraReducers: {
    [getBlogs.pending]: (state, action) => {
      state.loading = true;
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.data;
    },
    [getBlogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [getBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blog = action.payload.data;
    },
    [getBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    [deleteBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [createBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.data;
    },
    [createBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [updateBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.data;
    },
    [updateBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [categoryBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [categoryBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.data;
    },
    [categoryBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [searchBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [searchBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.data;
    },
    [searchBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setEdit } = blogSlice.actions;

export default blogSlice.reducer;
