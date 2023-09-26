import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  sinppet: [];
  isLoading: boolean;
  error: null;
};

//create Async Thunk , For Main video page
export const fetchMainVideos = createAsyncThunk(
  "mainVideoSlice/fetchMainVideo",
  async (url:string) => {
    const Api = "https://youtube-v31.p.rapidapi.com";
    const options = {
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        maxResults: "50",
      },
      headers: {
        "X-RapidAPI-Key": "bfa9cc88d2msh923fbbd020ac09cp176a1ajsn624451e948f2",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
      const res = await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${url}`, options);
      const data = await res.data.items
      
      return data
    
  }
);

export const mainVideoSlice = createSlice({
  name: "mainVideoSlice",

  initialState: {
    snippet: [],
    isLoading: false,
    error: null,
  },

  // create main video reducers
  reducers: {
    getMainVideoStart: (state) => {
      state.isLoading = true;
    },
    getMainVideoSuccess: (state, action) => {
      state.isLoading = false;
      state.snippet = action.payload;
    },
    getMainVideoFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMainVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMainVideos.fulfilled, (state, action: any) => {
      (state.isLoading = false), (state.snippet = action.payload);
    });
    builder.addCase(fetchMainVideos.rejected, (state, action: any) => {
      (state.isLoading = false), (state.error = action.error.message);
    });
  },
});

export const { getMainVideoStart, getMainVideoSuccess, getMainVideoFail } =
  mainVideoSlice.actions;
export default mainVideoSlice.reducer;
