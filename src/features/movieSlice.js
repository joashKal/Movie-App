import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    films: [],
    isLoading: false
}

export const searchFilm = createAsyncThunk("films/searchFilms", async (term) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=502cc712b8246e852f1e6eb6b137c3f6&language=en-US&page=1&include_adult=false&query=${term}`)
    console.log(response)
    return  await response
});

export const filmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {},
    extraReducers: {
        [searchFilm.pending]: (state, {payload}) => {
            state.isLoading = true
        },
        [searchFilm.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.films = payload
        },
        [searchFilm.rejected]: (state, {payload}) => {
            state.isLoading = false;
            console.log("rejected")
        },
    } 
})

