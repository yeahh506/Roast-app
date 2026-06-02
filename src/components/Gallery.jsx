import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();

  // 1. 전체 이미지 데이터 (원래 데이터 유지)
  const images = [
    { id: 1, src: "/img (9).jpg" ,title: "에티오피아-예가체프" }, 
    { id: 2, src: "/img (17).jpg" ,title: "에티오피아-시다모"}, 
    { id: 3, src: "/img (18).jpg" ,title: "에티오피아-아리차"},
    { id: 4, src: "/img (15).jpg" ,title: "르완다"}, 
    { id: 5, src: "/img (21).jpg" ,title: "케냐 AA"}, 
    { id: 6, src: "/img (1).jpg" ,title: "탄자니아 AAA"},
    { id: 7, src: "/img (12).jpg" ,title: "콜롬비아 수프리모"}, 
    { id: 8, src: "/img (4).jpg",title: "브라질" }, 
    { id: 9, src: "/img (3).jpg",title: "과테말라" },
    { id: 10, src: "/img (8).jpg" ,title: "엘살바도르"}, 
    { id: 11, src: "/img (13).jpg" ,title: "페루"}, 
    { id: 12, src: "/img (10).jpg" ,title: "온두라스"},
    { id: 13, src: "/img (11).jpg" ,title: "코스타리카"}, 
    { id: 14, src: "/img (19).jpg" ,title: "인토네시아-만델링"}, 
    { id: 15, src: "/img (2).jpg" ,title: "파프아뉴기니"},
    { id: 16, src: "/img (5).jpg" ,title: "스모키 블루"}, 
    { id: 17, src: "/img (6).jpg" ,title: "스위트 브라운"}, 
    { id: 18, src: "/img (7).jpg" ,title: "스페셜 그린"},
    { id: 19, src: "/img (14).jpg" ,title: "퓨어 엘로우"}, 
    { id: 20, src: "/img (16).jpg" ,title: "시그니처 골드"},
    { id: 21, src: "/img (20).jpg" ,title: "인디아 카피로얄"},
  ];

  // 2. 🔥 각 줄에 들어갈 타이틀, 방향, 이미지 데이터를 그룹화합니다.
 const galleryRows = [
    { title: "Africa", reverse: false, data: images.slice(0, 6) },
    { title: "Latin America", reverse: true, data: images.slice(6, 13) },
    { title: "Asia & Pacific", reverse: false, data: images.slice(14, 21) },
  ];

  // 3. 행을 렌더링하는 함수 (구조 분해 할당으로 세련되게 변경)
  const renderRow = ({ title, reverse, data }) => (
  <div className="space-y-3">
    {/* 줄별 타이틀 */}
    <div className="max-w-7xl mx-auto px-4">
      <h3
        className="
          text-sm
          md:text-xl
          text-white/50
          uppercase
          tracking-[0.2em]
          md:tracking-[0.3em]
          font-light
        "
      >
        {title}
      </h3>
    </div>

    {/* 무한 스크롤 컨테이너 */}
    <div className="md:hidden px-4">
      <div className="grid grid-cols-2 gap-4">
        {data.map((img) => (
          <div
            key={img.id}
            onClick={() => navigate(`/gallery/${img.id}`)}
            className="
              relative
              h-40
              overflow-hidden
              rounded-3xl
              cursor-pointer
            "
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-sm text-center px-2">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="hidden md:block">
    <div className="overflow-x-hidden overflow-y-visible py-10 max-w-7xl mx-auto px-4 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
      <div
        className={`
          flex
          gap-4
          md:gap-8
          w-max

          ${reverse ? "scroll-reverse" : "scroll"}
        `}
      >
        {[...data, ...data].map((img, i) => (
          <div
            key={i}
            onClick={() => navigate(`/gallery/${img.id}`)}
            className={`
              /* 💡group 클래스를 주어, 이 박스에 마우스를 올렸을 때 내부 글자나 레이어가 반응하도록 만듭니다 */
              group
              relative

              min-w-[220px]
              md:min-w-[300px]

              h-56
              md:h-80
              ${
                reverse
                  ? "rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[80px] md:rounded-bl-[80px]"
                  : "rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px]"
              }
              overflow-hidden
              shrink-0
              cursor-pointer
              
              /* 호버 시 커지는 효과 */
              hover:scale-[1.05]
              hover:shadow-2xl
              hover:z-10

              transition-all
              duration-300
              ease-out
            `}
          >
            {/* 배경 이미지 */}
            <img
              src={img.src}
              className="w-full h-full object-cover"
              alt=""
            />

            {/* 🔥 핵심 1: 마우스 올리면 나타나는 반투명 검은색 오버레이 레이어 */}
            <div 
              className="
                absolute 
                inset-0 
                bg-black/60 
                
                /* 기본 상태는 투명하다가 호버 시에만 선명해짐 */
                opacity-100
                md:opacity-0
                md:group-hover:opacity-100
                
                flex 
                flex-col 
                justify-center 
                items-center 
                
                transition-opacity 
                duration-300
              "
            >
              {/* 🔥 핵심 2: 오버레이 위에 떠오를 커피 정보 텍스트 */}
              {/* 현재 데이터 구조에 텍스트가 없다면 임시로 `Coffee ${img.id}` 형태로 나오게 잡았습니다. */}
              <p 
                className="
                  text-white 
                  text-base
                  md:text-xl
                  font-medium 
                  tracking-wide
                  
                  /* 글씨가 아래에서 위로 스르륵 올라오는 디테일 애니메이션 */
                  translate-y-2
                  group-hover:translate-y-0
                  transition-transform
                  duration-300
                "
              >
                {img.title || `${title} Blend ${img.id}`}
              </p>
              
              <span className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                View Detail
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
);

  return (
   <section id="gallery" className="py-16 md:py-32 bg-[#1e1e1e]">
      <div className="w-full">
        {/* 메인 타이틀 */}
        <h2
          className="
            text-3xl
            md:text-5xl
            text-white
            font-bold
            text-center
            mb-12
            md:mb-24
            tracking-wide
          "
        >
          Coffee Origins
        </h2>

        {/* 🔥 루프를 돌며 정의한 행(Row)들을 부드럽게 출력 */}
        <div className="space-y-12">
          {galleryRows.map((row, index) => (
            <div key={index}>{renderRow(row)}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;