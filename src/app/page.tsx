"use client"

import { useEffect, useState } from "react";
import { fetchMainVideos, getMainVideoFail } from "../Redux/reducers/mainVideo";
import { useDispatch, useSelector } from "react-redux";
import VideoDetail from "@/components/video.Detail";

export default function Home() {
  const [catigory, setcatigory] = useState<string>('fezot')
  const dispatch = useDispatch();


    useEffect(() => {
      dispatch(fetchMainVideos(catigory) as string | any)
    }, [dispatch , catigory]);
  return (
    <>
      <VideoDetail />
    </>
  )
}