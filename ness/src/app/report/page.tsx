export default function Report() {
  return (
    <>
      <body>
        <div className="mt-[81px] flex flex-col w-full items-center">
          <div className="">
            <div className="w-[100px] h-[100px] bg-gray-500 "></div>
          </div>
          <div className="flex items-center pt-[43px]">
            <div className="text-[24px] font-medium w-[200px] text-center overflow-wrap-break-word mb-[46px]">
              민주님, 방학에는 역시 개발공부죠!
            </div>
          </div>
        </div>
        <div className="text-[20px] font-[500] mb-[10px]">당신의 메모리</div>
        <div className="rounded-[10px] bg-[#ECECEC] w-[100%] h-[127px]"></div>
        <div className="text-[20px] font-[500] mb-[10px] mt-[40px]">
          당신의 태그
        </div>
        <div className="flex gap-[6px] flex-col">
          <div className="rounded-[10px] bg-[#F2F0FF] w-full h-[48px] flex items-center justify-center">
            <div className="text-[16px] font-[500] text-center">
              공부 매니아
            </div>
          </div>
          <div className="rounded-[10px] bg-[#F2F0FF] w-full h-[48px] flex items-center justify-center">
            <div className="text-[16px] font-[500] text-center">
              클라이밍 전문가
            </div>
          </div>
          <div className="rounded-[10px] bg-[#F2F0FF] w-full h-[48px] flex items-center justify-center">
            <div className="text-[16px] font-[500] text-center">
              노는 게 좋아
            </div>
          </div>
        </div>
      </body>
      <nav className="w-full fixed h-[90px] border-t border-gray-[#454545] bg-white bottom-0 left-0">
        <div className="p-[20px] flex space-between ">
          <div className="flex-grow text-center">일정</div>
          <div className="flex-grow text-center">홈</div>
          <div className="flex-grow text-center">계정</div>
        </div>
      </nav>
    </>
  );
}
