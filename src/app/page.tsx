import Link from "next/link";
import RoadMapList from "@/components/main/RoadMapList";
import Logo from "@/components/Logo";
import MainPciture from "@/components/MainPicture.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Link href="/" className="w-[80%] flex flex-row items-center">
        <h1 className=" text-[2rem] font-bold my-8 mr-3">RedPoint</h1>
        <Logo />
      </Link>
      <Image
        src={MainPciture}
        className="w-[82%] mb-10"
        alt="Picture of the author"
      />
      <div className="w-[80%] flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-[80%]">
          <div className="w-[100%] flex flex-col mb-16">
            <h2 className="text-[1.8rem] font-bold mb-6">
              🔥 이번주 인기 로드맵 Top 4
            </h2>
            <RoadMapList category="toprank" />
          </div>
          <div className="w-[100%] flex flex-col mb-16">
            <h2 className="text-[1.8rem] font-bold mb-6">개발 로드맵 Top 4</h2>
            <RoadMapList category="develop" />
          </div>
          <div className="w-[100%] flex flex-col mb-16">
            <h2 className="text-[1.8rem] font-bold mb-6">
              인공지능 로드맵 Top 4
            </h2>
            <RoadMapList category="ai" />
          </div>
          <div className="w-[100%] flex flex-col mb-16">
            <h2 className="text-[1.8rem] font-bold mb-6">수학 로드맵 Top 4</h2>
            <RoadMapList category="math" />
          </div>
        </div>
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <div className="w-[20%] flex flex-col">
      <div className="text-[1.5rem] font-semibold py-1 cursor-pointer">
        전체
      </div>
      <div className="text-[1.5rem] font-semibold py-1 text-gray-400 cursor-pointer">
        개발
      </div>
      <div className="text-[1.5rem] font-semibold py-1 text-gray-400 cursor-pointer">
        인공지능
      </div>
      <div className="text-[1.5rem] font-semibold py-1 text-gray-400 cursor-pointer">
        수학
      </div>
      <div className="text-[1.5rem] font-semibold py-1 text-gray-400 cursor-pointer">
        과학
      </div>
      <div className="text-[1.5rem] font-semibold py-1 text-gray-400 cursor-pointer">
        인문학
      </div>
      <div className="text-[1.5rem] font-semibold py-1 text-gray-400 cursor-pointer">
        언어
      </div>
      <div className="text-[1.5rem] font-semibold py-1 text-gray-400 cursor-pointer">
        스포츠
      </div>
      <div className="text-[1.5rem] font-semibold py-1 text-gray-400 cursor-pointer">
        디지털 리터리시
      </div>
      <div className="w-[70%] flex items-center justify-center h-[3rem] my-4 text-[1.2rem] text-white bg-gray-500 rounded-lg cursor-pointer">
        새 로드맵 생성
      </div>
    </div>
  );
}
