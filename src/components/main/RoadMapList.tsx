"use client";

import { useState, useEffect, use } from "react";
import axios from "axios";
import RoadMapCard from "@/components/main/RoadMapCard";

export default function RoadMapList({ category }: { category: string }) {
  const [roadmapList, setRoadmapList] = useState([]);
  //   setRoadmapList(1234);

  const roadMapListAPI = async () => {
    try {
      const res = await axios.post(
        `https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI/api/roadmap-list`,
        { category: category }
      );
      setRoadmapList(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    roadMapListAPI();
  }, []); // category가 변경될 때마다 효과를 다시 실행하도록 의존성 배열 수정

  return (
    <>
      <div className="flex flex-row w-full justify-between">
        {roadmapList.map((roadmapInfo, index) => {
          console.log(roadmapInfo);
          return <RoadMapCard key={index} roadmapInfo={roadmapInfo} />;
        })}
      </div>
    </>
  );
}
