import Link from "next/link";

interface RoadmapInfoType {
  imageUrl: string;
  category: string;
  title: string;
  sectionCount: number;
  veiwsCount: number;
  likeCount: number;
}

export default function RoadMapCard({
  roadmapInfo,
}: {
  roadmapInfo: RoadmapInfoType;
}) {
  return (
    <>
      <Link
        href="/roadmap/frontend"
        className="flex flex-col w-[23%]"
        target="_blank"
      >
        <img
          src={roadmapInfo.imageUrl}
          className="w-full h-[10rem] bg-gray-500 border border-black rounded-xl"
        ></img>
        <div className="text-[#5585FF] my-2">{roadmapInfo.category}</div>
        <div className="text-[1.1rem] font-bold">{roadmapInfo.title}</div>
        <div className="text-[#848484] mb-4">
          섹션 {roadmapInfo.sectionCount}개
        </div>
        <div className="text-[#848484]">
          조회수 {roadmapInfo.veiwsCount}만회 - 좋아요 {roadmapInfo.likeCount}k
        </div>
      </Link>
    </>
  );
}
