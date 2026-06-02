import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const data = [
  {
    id: 1, src: "/img (9).jpg",title: "에티오피아-예가체프 | Ethiopia-Yirgacheffe",desc: "탠저린 | 캐슈넛 | 맥아 | 꽃향",
    detail: [
      "부드러운 산미와 깔끔한 뒷 맛",
    ],

    orderLink: "/order/ethiopia"
  },
  {
    id: 2,src: "/img (17).jpg",title: "에티오피아-시다모 | Ethiopia-Sidamo", desc: "라임/비스켓/시리얼/땅콩",
    detail: [
      "밝은 산미와 레몬향",
      "균형잡힌 바디감",
    ],

    orderLink: "/order/kenya"
  },
  {
    id: 3,src: "/img (18).jpg",title: "에티오피아-아리차 | Ethiopia-Sidamo", desc: "베리/건포도/피칸/시리얼/볶은땅콩",
    detail: [
      "좋은 향미와 복합적인 맛",
    ],

    orderLink: "/order/kenya"
  },
 {
    id: 4,src: "/img (15).jpg",title: "르완다 | Rwanda", desc: "건포도/볶은견과류/다크초콜릿/카카오닙스",
    detail: [
      "진한 단 맛과 높은 바디감",
    ],

    orderLink: "/order/kenya"
  },
 {
    id: 5,src: "/img (21).jpg",title: "케냐 AA | Kenya AA", desc: "자몽/포도/브라운슈가/사탕/군밤",
    detail: [
      "복합적인 향미와 산뜻한 느낌",
    ],

    orderLink: "/order/kenya"
  },
  { id: 6, src: "/img (1).jpg", title: "탄자니아 AAA | Tanzania AAA", desc: "라임/군밤/다크초콜릿/시리얼" ,
    detail: [
      "묵직한 바디감과 고사한 단 맛"
    ],

    orderLink: "/order/kenya"},
  { id: 7, src: "/img (12).jpg", title: "콜롬비아 수프리모", desc: "군밤/만다린/청사과/볶은땅콩", 
    detail: [
     "균형잡힌 밸런스와 부드러운 단 맛",
    ],

    orderLink: "/order/kenya" },
    {
    id: 8, src: "/img (4).jpg",title: "브라질",desc: "바게뜨/오트밀/볶은땅콩/맥아",
    detail: [
      "부드러운 밸런스과 깔끔한 뒷 맛",
    ],

    orderLink: "/order/ethiopia"
  },
   {
    id: 9, src: "/img (3).jpg",title: "과테말라",desc: "그래놀라/피스타치오/아몬드/오렌지",
    detail: [
      "고소한 단 맛과 스모크한 향",
    ],

    orderLink: "/order/ethiopia"
  },
  {
    id: 10, src: "/img (8).jpg",title: "엘살바도르",desc: "캐슈넛/비스켓/브라운슈가/오렌지",
    detail: [
      "깔끔하고 고소한 여운",
    ],
    orderLink: "/order/ethiopia"
  },
  {
    id: 11, src: "/img (13).jpg",title: "페루",desc: "볶은검은콩/다크초콜릿/시리얼/호밀빵",
    detail: [
      "묵직한 바디감과 밸런스",
    ],
    orderLink: "/order/ethiopia"
  },
  {
    id: 12, src: "/img (10).jpg",title: "온두라스",desc: "오렌지/호두/아몬드/크래커",
    detail: [
     "시럽같은 단 맛과 깔끔한 여운"
    ],

    orderLink: "/order/ethiopia"
  },
  {
    id: 13, src: "/img (11).jpg",title: "코스타리카",desc: "만다린/시리얼/아몬드/메이플시럽",
    detail: [
      "부드러운 산미와 깔끔한 뒷 맛"
    ],

    orderLink: "/order/ethiopia"
  },
  {
    id: 14, src: "/img (19).jpg",title: "인토네시아-만델링",desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",
    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    orderLink: "/order/ethiopia"
  },
  {
    id: 15, src: "/img (2).jpg",title: "파프아뉴기니",desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",
    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    orderLink: "/order/ethiopia"
  },
  {
    id: 16, src: "/img (5).jpg",title: "스모키 블루",desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",
    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    orderLink: "/order/ethiopia"
  },
  {
    id: 17, src: "/img (6).jpg",title: "스위트 브라운",desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",
    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    orderLink: "/order/ethiopia"
  },
  {
    id: 18, src: "/img (7).jpg",title: "스페셜 그린",desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",
    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    orderLink: "/order/ethiopia"
  },
   {
    id: 19, src: "/img (14).jpg",title: "퓨어 엘로우",desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",
    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    orderLink: "/order/ethiopia"
  },
   {
    id: 20, src: "/img (16).jpg",title: "시그니처 골드",desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",
    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    orderLink: "/order/ethiopia"
  },
   {
    id: 21, src: "/img (20).jpg",title: "인디아 카피로얄",desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",
    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    orderLink: "/order/ethiopia"
  },
];

function GalleryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 상위 데이터 구조에 맞게 매칭 (예시: data 변수가 바깥에 있다고 가정)
  const item = data.find((d) => d.id === Number(id));

  if (!item) return <div className="min-h-screen bg-[#1e1e1e] text-white flex justify-center items-center">존재하지 않는 페이지입니다.</div>;
 
  {/*스크롤 조절*/}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    // 🔥 변경 포인트 1: flex, flex-col, justify-center를 주어 내부 요소들을 화면의 세로 중앙으로 정렬합니다.
       <div className="min-h-screen bg-[#1e1e1e] text-white pt-32 md:pt-40 pb-16 px-4 md:px-10 overflow-hidden relative">
      
      {/* 닫기 버튼 */}
      <button
        onClick={() => navigate(-1)}
        className="
          fixed
          top-24
          right-4
          md:top-10
          md:right-10

          z-50

          inline-block
          origin-center

          text-3xl
          md:text-4xl

          text-white
          bg-black/40
          backdrop-blur-sm

          w-12
          h-12

          rounded-full

          hover:rotate-90
          hover:text-amber-200

          transition-all
          duration-500
        "
      >
        ×
      </button>
      
      {/* 본문 콘텐츠 박스 */}
      <div
        className="
          w-full
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          gap-8 md:gap-16
        "
      >
        
        {/* 이미지 섹션 */}
        <div className="flex-1 flex justify-center md:justify-end">
         <img
          src={item.src}
          alt={item.title}
          className="
            w-full

              max-w-[320px]
              h-[320px]

              md:max-w-[500px]
              md:h-[600px]

              object-cover
              rounded-3xl
          "
        />
        </div>

        {/* 설명 섹션 */}
        <div className="flex-1 w-full text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold mb-8">
            {item.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            {item.desc}
          </p>

          <div className="mt-10 space-y-4 text-gray-400">
            {item.detail?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
          <button
            onClick={() => navigate(item.orderLink)}
            className="
              px-8
              py-4

              border
              border-white

              text-white
              font-medium

              tracking-wider

              hover:bg-white
              hover:text-[#1e1e1e]

              transition-all
              duration-300
            "
          >
            주문하기
          </button>
        </div>
        </div>

      </div>
    </div>
  );
}

export default GalleryDetail;