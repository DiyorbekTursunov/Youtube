"use client";
import { log } from "console";
import moment from "moment";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
const VideoDetail = () => {
  const selector = useSelector<any>(
    (mainVideoReducer) => mainVideoReducer.mainVideoReducer
  );
  return (
    <div className="grid 2xl:grid-cols-16 lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 px-5">
      {/* {selector.snippet &&
        selector.snippet.map((item: any) => {
          return <></>;
        })} */}
    </div>
  );
};

export default VideoDetail;
