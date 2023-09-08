import AllVideoService from "@/service/getAllVideoService"

export default async function Home() {
  const data = await AllVideoService.getAllVideo('UZ' , 30 , '')
  return (
    <>
    {data.items.map((item:any) => <img src={item.snippet.thumbnails.high.url}></img>)}
    </>
  )
}