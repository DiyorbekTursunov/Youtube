import { TypeVideo } from "@/interface/AllVideo";
import axios from "axios";

const AllVideoService = {
    async getAllVideo(videoType:TypeVideo){
        const options = {
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
              maxResults: '50'
            },
            headers: {
              'X-RapidAPI-Key': 'bfa9cc88d2msh923fbbd020ac09cp176a1ajsn624451e948f2',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
        const res = await axios.get(`${'https://youtube-v31.p.rapidapi.com/search'}/${videoType}`, options);
        return res.data;
    }
};
export default AllVideoService