import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    blogs: builder.query({
      query: () => `blogs`,
      providesTags: ["Blog"],
    }),
    blog: builder.query({
      query: (id) => `blogs/${id}`,
      providesTags: ["Blog"],
    }),
    blogCategory: builder.query({
      query: (category) => `blogs?category=${category}&_start=0&_end=3`,
      providesTags: ["Blog"],
    }),
    blogFilterCategory: builder.query({
      query: (category) => `blogs?category=${category}`,
      providesTags: ["Blog"],
    }),
    blogSearch: builder.query({
      query: (search) => `blogs?q=${search}`,
      providesTags: ["Blog"],
    }),
    addBlog: builder.mutation({
      query: ({ values }) => ({
        url: `blogs`,
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, values }) => ({
        url: `blogs/${id}`,
        method: "PUT",
        body: values,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const { useBlogsQuery, useBlogQuery, useAddBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation, useBlogCategoryQuery, useBlogSearchQuery, useBlogFilterCategoryQuery } = blogsApi;
