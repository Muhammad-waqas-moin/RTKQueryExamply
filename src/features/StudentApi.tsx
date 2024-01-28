// // import { createApi } from "@reduxjs/toolkit/query";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Student } from "../models/studdent.model";
// export const studentApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://65b61faeda3a3c16ab003d1b.mockapi.io/api/v1",
//   }),
//   endpoints: (builder) => ({
//     getStudents: builder.query<Student[], void>({
//       query: () => ({
//         url: "/crud",
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const { useGetStudentsQuery } = studentApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Student } from "../models/studdent.model";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65b61faeda3a3c16ab003d1b.mockapi.io/api/v1",
  }),
  tagTypes: ["crud"],
  endpoints: (builder) => ({
    getStudents: builder.query<Student[], void>({
      query: () => "/crud",
      providesTags: ["crud"],
    }),
    getStudent: builder.query<Student, string>({
      query: (id) => `/crud/${id}`,
      providesTags: ["crud"],
    }),
    addStudent: builder.mutation<void, Student>({
      query: (Studdent) => ({
        url: "/crud",
        method: "POST",
        body: Studdent,
      }),
      invalidatesTags: ["crud"],
    }),
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/crud/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["crud"],
    }),
    updateStudent: builder.mutation<void, Student>({
      query: ({ id, ...rest }) => ({
        url: `/crud/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
  useGetStudentQuery,
  useUpdateStudentMutation,
} = studentApi;
