"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

interface LectureDataType {
  title: string;
  imageUrl: string;
  time: string;
}

export default function Lecture() {
  const searchParams = useSearchParams();
  let courseTitle = searchParams.get("courseTitle");
  let lectureId = searchParams.get("lectureId");
  if (!courseTitle) {
    courseTitle = "HTML";
  }
  if (!lectureId) {
    lectureId = "0";
  }

  const [lectureData, setLectureData] = useState<LectureDataType[]>();
  const [lectureYoutubeLink, setLectureYoutubeLink] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const lectureDataAPI = async () => {
    try {
      const res = await axios.get(
        `https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI/api/html-lecture`
      );
      setLectureData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getLectureYoutubeLink = async () => {
    try {
      const res = await axios.post(
        `https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI/api/lecture-youtube-link`,
        {
          lectureId: lectureId,
        }
      );
      setLectureYoutubeLink(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    lectureDataAPI();
    getLectureYoutubeLink();
    setIsLoading(false);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sidebar, setSidebar] = useState(true);

  if (isLoading) {
    return <div className="w-full h-full bg-black"></div>;
  }
  return (
    <main className="flex flex-row items-center justify-center bg-black h-[100vh] w-[100vw]">
      <div className={`${sidebar ? "w-[75vw]" : "w-[95vw]"} h-[100vh]`}>
        <iframe
          className="w-[100%] h-[100vh]"
          // width="560"
          // height="315"
          src={`${lectureYoutubeLink}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      {sidebar ? (
        <div className="flex flex-col bg-[#272727] w-[25vw] h-[100vh] px-6 ">
          <div className="flex flex-row items-center justify-between py-4">
            <div className="text-[1.5rem] font-semibold text-white">목록</div>
            <FaArrowRight
              color="gray"
              size="24"
              onClick={() => setSidebar(!sidebar)}
            />
          </div>
          <div className="text-[1.5rem] font-semibold text-white">HTML</div>
          <div className="text-white mb-4">
            생활코딩 {parseInt(lectureId) + 1}/44
          </div>
          {/* 영상 목록 */}
          <div className="flex flex-col h-[60vh] overflow-scroll">
            {lectureData?.map((data, i) => {
              return (
                <a
                  key={i}
                  href={`/lecture?courseTitle=HTML&lectureId=${i}`}
                  className="flex flex-row py-2"
                >
                  {/* <div className="w-[9rem] h-[5rem] bg-gray-500 rounded-xl"></div> */}
                  <img
                    src={`${data.imageUrl}`}
                    className="w-[9rem] h-[5rem] rounded-xl"
                  ></img>
                  <div className="flex flex-col w-[100%] px-4">
                    <div className="text-white">{data.title}</div>
                    <div className="text-gray-400">생활코딩</div>
                    <div className="flex flex-row-reverse text-gray-400">
                      {data.time}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <hr className="my-4 color-white" />
          <div className="flex flex-col">
            <div className="text-[1.5rem] text-white font-bold mb-2">메모</div>
            <textarea
              className="w-[100%] h-[15vh] p-4 bg-[#404040] text-white rounded-xl resize-none"
              placeholder="메모를 입력하세요"
            ></textarea>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-[5vw] h-[100vh]">
          <div
            onClick={() => setSidebar(!sidebar)}
            className="flex items-center justify-center bg-gray-900 w-[3rem] h-[3rem] mt-4 text-white rounded-xl cursor-pointer"
          >
            <IoMenu color="white" size="24" />
          </div>
        </div>
      )}
    </main>
  );
}
