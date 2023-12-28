import Link from "next/link";

interface CourseCardInfoType {
  title: string;
  subtitle: string;
  imageUrl: string;
  author: string;
  time: number;
  videoCount: number;
}

export default function CourseCard({
  CourseCardInfo,
}: {
  CourseCardInfo: CourseCardInfoType;
}) {
  return (
    <>
      <div className="w-[80%] flex flex-row items-center">
        <div className="w-6 h-6 rounded-full border-4 mr-4"></div>
        <div className="flex items-center justify-center px-3 py-2 bg-[#CCF8D6] text-[#009F2D] rounded-xl mr-2">
          필수
        </div>
        <div className="text-[1.5rem] font-bold">{CourseCardInfo.title}</div>
      </div>
      <div className="w-[80%] flex flex-col">
        <div className="flex flex-row">
          <div className="mx-[0.6rem] w-0 h-100% border border-2"></div>
          <Link
            href={`/lecture?courseTitle=${CourseCardInfo.title}`}
            className="flex flex-row p-4"
            target="_blank"
          >
            {/* <div className="w-[10rem] h-[6rem] bg-gray-300 rounded-xl"></div> */}
            <img
              src={CourseCardInfo.imageUrl}
              className="w-[10rem] h-[6rem] bg-gray-300 border border-black rounded-xl"
            ></img>
            <div className="flex flex-col justify-between px-4 py-1">
              <div>
                <div className="text-[1.2rem] font-bold">
                  {CourseCardInfo.subtitle}
                </div>
                <div className="">{CourseCardInfo.author}</div>
              </div>
              <div>
                {CourseCardInfo.time}분 - 동영상 {CourseCardInfo.videoCount}개
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
