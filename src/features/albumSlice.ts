import { Album } from "../model/Album"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface AlbumState{
    albums: Album[]
}

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    return data;
})

export const albumSlice = createSlice({
    name:"albums",
    initialState: {
        albums: [],
    },
    reducers: {},
    extraReducers:{
        [fetchAlbums.fulfilled.type]: (state,action)=>{
            state.albums = action.payload
        }
    }
})

export default albumSlice.reducer
export const selectAlbums=(state:{albums:AlbumState}) => state.albums.albums