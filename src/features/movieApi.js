import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.themoviedb.org/3"}),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (pageNumber)=> `/trending/all/day?api_key=502cc712b8246e852f1e6eb6b137c3f6&page=${pageNumber}`
        }),
        getSingleMovie: builder.query({
            query: (id)=> `/movie/${id}?api_key=502cc712b8246e852f1e6eb6b137c3f6&language=en-US`
        }),
        getOnlyMovies: builder.query({
            query: (pageNumber)=> `/discover/movie?api_key=502cc712b8246e852f1e6eb6b137c3f6&language=en-US&page=${pageNumber}`
        }),
        getOnlyTvShows: builder.query({
            query: (pageNumber)=> `/discover/tv?api_key=502cc712b8246e852f1e6eb6b137c3f6&language=en-US&page=${pageNumber}`
        }),
        getSingleTvShow: builder.query({
            query: (id)=> `/tv/${id}?api_key=502cc712b8246e852f1e6eb6b137c3f6&language=en-US`
        }),
        searchFilms: builder.query({
            query: (term) => `/search/multi?api_key=502cc712b8246e852f1e6eb6b137c3f6&language=en-US&page=1&include_adult=false&query=${term}`
                
        })
        
    })
})

export const {useGetMoviesQuery, useGetSingleMovieQuery, useGetOnlyMoviesQuery, useGetOnlyTvShowsQuery, useGetSingleTvShowQuery, useSearchFilmsQuery} = movieApi