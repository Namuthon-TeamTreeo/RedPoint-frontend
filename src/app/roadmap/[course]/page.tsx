"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { GoArchive } from "react-icons/go";
import CourseCard from "@/components/roadmap/CourseCard";
import Logo from "@/components/Logo";

/**
 * API Type 지정
 */
interface CourseCardInfoType {
  title: string;
  subtitle: string;
  imageUrl: string;
  author: string;
  time: number;
  videoCount: number;
}

interface RoadmapDetailType {
  information: {
    title: string;
    description: string;
    category: string;
    sectionCount: number;
  };
  basic: CourseCardInfoType[];
  middle: CourseCardInfoType[];
  advenced: CourseCardInfoType[];
}

export default function Course() {
  /**
   * URL Query String을 통해 course를 받아옴
   */
  let { course } = useParams();
  const [roadmapDetail, setRoadmapDetail] = useState<RoadmapDetailType>();

  if (course !== "frontend") {
    course = "frontend";
  }

  /**
   * API 호출
   */
  const roadMapDetailAPI = async () => {
    try {
      const res = await axios.post(
        `https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI/api/roadmap-detail`,
        { category: course }
      );
      setRoadmapDetail(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    roadMapDetailAPI();
  }, []);

  return (
    <main className="flex flex-col items-center w-full">
      <Link href="/" className="w-[80%] flex flex-row items-center mb-12">
        <h1 className=" text-[2rem] font-bold my-8 mr-3">RedPoint</h1>
        <Logo />
      </Link>
      <div className="flex flex-row w-[80%]">
        <div className="flex items-center justify-center px-3 py-2 bg-[#ECECEC] rounded-xl mr-2">
          {roadmapDetail?.information.category}
        </div>
        <div className="flex items-center justify-center px-3 py-2 bg-[#FFDBDB] text-red-600 rounded-xl">
          인기
        </div>
      </div>
      <h1 className="w-[80%] text-[2rem] font-bold mt-2">
        {roadmapDetail?.information.title}
      </h1>
      <p className="w-[80%]">{roadmapDetail?.information.description}</p>
      <div className="flex flex-row items-center justify-between w-[80%] mt-6">
        <div className="flex flex-row items-center text-gray-500">
          <GoArchive className="mr-1 text-gray-500" size="20" />
          섹션 {roadmapDetail?.information.sectionCount}개
        </div>
        <div className="flex flex-row">
          <div className="flex items-center justify-center px-3 py-2 mr-2 bg-[#EB4343] rounded-xl cursor-pointer">
            <GoHeartFill color="white" />
            <div className="ml-1 text-white">좋아요</div>
          </div>
          <div className="flex items-center justify-center px-3 py-2 bg-[#ECECEC] rounded-xl cursor-pointer">
            <IoShareSocialOutline />
            <div
              className="ml-1"
              onClick={() => {
                alert("클립보드에 링크가 복사되었습니다.");
                navigator.clipboard.writeText(
                  "https://red-point-frontend.vercel.app/roadmap/frontend"
                );
              }}
            >
              공유하기
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] text-[1.3rem] font-bold px-4 py-2 my-4 mt-8 border border-black bg-[#ECECEC] rounded-xl">
        1. 기초
      </div>
      {roadmapDetail?.basic.map((course, index) => {
        return <CourseCard key={index} CourseCardInfo={course} />;
      })}

      <div className="w-[80%] text-[1.3rem] font-bold px-4 py-2 my-4 mt-8 border border-black bg-[#ECECEC] rounded-xl">
        2. 중급
      </div>
      {roadmapDetail?.middle.map((course, index) => {
        return <CourseCard key={index} CourseCardInfo={course} />;
      })}

      <div className="w-[80%] text-[1.3rem] font-bold px-4 py-2 my-4 mt-8 border border-black bg-[#ECECEC] rounded-xl">
        3. 고급
      </div>
      {roadmapDetail?.advenced.map((course, index) => {
        return <CourseCard key={index} CourseCardInfo={course} />;
      })}

      <div className="mt-20"></div>
    </main>
  );
}
