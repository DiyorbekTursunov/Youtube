import { TypeVideo } from "@/interface/AllVideo";
import AllVideoService from "@/service/getAllVideoService";
import { createSlice } from "@reduxjs/toolkit";

export interface AllVideo {
    items:[]
}
const initialState: AllVideo = {
    items:[]
}
export const AllVideoSlice = createSlice({
    name: "AllVideo" ,
    initialState , 
    reducers: {
        AllVideo (VideoType) => {
            AllVideoService.getAllVideo(VideoType)
        }
    }
})