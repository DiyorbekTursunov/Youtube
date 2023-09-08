import axios from "axios";

const VideoAPI = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/search"
})
export default VideoAPI