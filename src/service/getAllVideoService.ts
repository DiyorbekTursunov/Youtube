import axios from "./axios";

const AllVideoService = {
  async getAllVideo(region:string , maxResults:number , videoType:string) {
    const params = {
      key:'AIzaSyA1iIHjE9H-TdTxjbjLLRw_pfmg0WKpssw',
      region ,
      maxResults ,
      videoType
    }
    const res = await axios.get(
      `?part=snippet&maxResults=${params.maxResults}&q=${params.videoType}&key=${params.key}&type=${'video'}&region=${params.region}`
    );
    return res.data;
  },
};
export default AllVideoService;