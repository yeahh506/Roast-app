import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";

export default function Bean() {
  {/* 스크롤 조절 */}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedBean, setSelectedBean] = useState(null);

  /* 커피종류 */
  const beans = [
    {
      id: 1,
      name: "Ethiopia Yirgacheffe",
      country: "Africa",
      taste: "신맛",
      roast: "Light Roast",
      note: "Floral · Citrus · Tea Like",
      desc: "꽃향과 밝은 산미가 길게 이어지는 에티오피아 싱글 오리진.",
      image: "/img (2).jpg",
    },
    {
      id: 2,
      name: "Ethiopia 시다모",
      country: "Africa",
      taste: "달콤",
      roast: "Medium Roast",
      note: "Caramel · Brown Sugar · Balanced",
      desc: "카라멜 계열의 단맛과 균형감 있는 바디가 특징입니다.",
      image: "/img (1).jpg",
    },
    {
      id: 3,
      name: "Ethiopia 아리차",
      country: "Africa",
      taste: "고소",
      roast: "Medium Dark",
      note: "Nutty · Cocoa · Heavy Body",
      desc: "견과류의 고소함과 깊은 카카오 향이 인상적인 원두입니다.",
      image: "/img (3).jpg",
    },
    {
      id: 4,
      name: "Kenya AA",
      country: "Africa",
      taste: "신맛",
      roast: "Light Roast",
      note: "Berry · Bright · Winey",
      desc: "베리류의 산뜻한 향과 와인 같은 산미가 살아있습니다.",
      image: "/img (4).jpg",
    },
    {
      id: 5,
      name: "르완다",
      country: "Africa",
      taste: "고소",
      roast: "Medium Roast",
      note: "Chocolate · Almond · Smooth",
      desc: "부드러운 질감과 초콜릿 계열의 안정적인 풍미를 가집니다.",
      image: "/img (5).jpg",
    },
    {
      id: 6,
      name: "탄자니아 AAA",
      country: "Africa",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (5).jpg",
    },
    {
      id: 7,
      name: "콜롬비아 수프리모",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (5).jpg",
    },
    {
      id: 8,
      name: "브라질",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (5).jpg",
    },
    {
      id: 9,
      name: "과테말라",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (5).jpg",
    },
    {
      id: 10,
      name: "엘살바도르",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (5).jpg",
    },
    {
      id: 11,
      name: "페루",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (5).jpg",
    },
    {
      id: 12,
      name: "온두라스",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (5).jpg",
    },
    {
      id: 13,
      name: "코스타리카",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (5).jpg",
    },
    {
      id: 14,
      name: "인도네시아-만델링",
      country: "Asia",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (14).jpg",
    },
    {
      id: 15,
      name: "파프아뉴기니",
      country: "Asia",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image: "/img (15).jpg",
    },
  ];

  const [countryFilter, setCountryFilter] = useState("전체");
  const [tasteFilter, setTasteFilter] = useState("전체");

  const countries = [
    "전체",
    ...new Set(beans.map((bean) => bean.country)),
  ];

  const tastes = ["전체", "달콤", "고소", "신맛", "쌉싸름"];

  const filteredBeans = useMemo(() => {
    return beans.filter((bean) => {
      const countryMatch =
        countryFilter === "전체" || bean.country === countryFilter;

      const tasteMatch =
        tasteFilter === "전체" || bean.taste === tasteFilter;

      return countryMatch && tasteMatch;
    });
  }, [countryFilter, tasteFilter, beans]);

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#2c221e] overflow-hidden">
      <Header />

      {/* 맨 윗 부분 제목  */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-14 md:pt-22 pb-6 md:pb-5">
        <div className="flex items-end justify-between gap-5 flex-wrap border-b border-[#dcd2c6] pb-6">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-[#1a120f]">
              Roastery Archive
            </h1>
          </div>

          <p className="text-[#5c4a42] text-sm leading-[2]">
            산지와 향, 로스팅의 밀도를 기준으로
            서로 다른 분위기의 원두를 기록합니다.
          </p>
        </div>
      </section>

      {/* FILTER 검색부분  */}
      <section className="max-w-7xl mx-auto px-6 pb-6">
        <div className="border border-[#dcd2c6] bg-white p-8 md:p-7 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* COUNTRY */}
            <div>
              <p className="text-[#a0522d] font-semibold text-xs tracking-[0.3em] uppercase mb-6">
                Country
              </p>

              <div className="flex flex-wrap gap-3 overflow-x-auto">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => setCountryFilter(country)}
                    className={`
                      px-3 md:px-5
                      py-2 md:py-3
                      text-[11px]
                      md:text-xs
                      font-medium
                      tracking-[0.1em]
                      md:tracking-[0.2em]
                      uppercase
                      border
                      transition-all
                      duration-300
                      ${
                        countryFilter === country
                          ? "bg-[#a0522d] text-white border-[#a0522d] shadow-sm"
                          : "border-[#dcd2c6] bg-[#faf8f5] text-[#5c4a42] hover:border-[#a0522d] hover:text-[#a0522d]"
                      }
                    `}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            {/* TASTE */}
            <div>
              <p className="text-[#a0522d] font-semibold text-xs tracking-[0.3em] uppercase mb-6">
                Taste Profile
              </p>

              <div className="flex flex-wrap gap-3">
                {tastes.map((taste) => (
                  <button
                    key={taste}
                    onClick={() => setTasteFilter(taste)}
                    className={`
                      px-3 md:px-5
                      py-2 md:py-3
                      text-[11px]
                      md:text-xs
                      font-medium
                      tracking-[0.1em]
                      md:tracking-[0.2em]
                      uppercase
                      border
                      transition-all
                      duration-300
                      ${
                        tasteFilter === taste
                          ? "bg-[#a0522d] text-white border-[#a0522d] shadow-sm"
                          : "border-[#dcd2c6] bg-[#faf8f5] text-[#5c4a42] hover:border-[#a0522d] hover:text-[#a0522d]"
                      }
                    `}
                  >
                    {taste}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-[1px] bg-[#dcd2c6]">
          {filteredBeans.map((bean) => (
            <div
              key={bean.id}
              onClick={() => setSelectedBean(bean)}
              className="
                group
                bg-[#f7f4ef]
                p-8
                md:p-14
                cursor-pointer
                hover:bg-white
                transition-all
                duration-500
                shadow-sm
              "
            >
              <div className="flex justify-between items-start mb-12 gap-8">
                <div>
                  <p
                    className="
                      text-[#a0522d]
                      font-bold
                      text-xs
                      tracking-[0.2em]
                      md:tracking-[0.35em]
                      uppercase
                      mb-2 md:mb-4
                    "
                  >
                    {bean.country}
                  </p>

                  <h2
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-4xl
                      font-semibold
                      leading-[1.3]
                      mb-2 md:mb-5
                      text-[#1a120f]
                    "
                  >
                    {bean.name}
                  </h2>

                  <p
                    className="
                      text-[#735e54]
                      font-medium
                      text-xs
                      md:text-sm
                      tracking-[0.1em]
                      md:tracking-[0.2em]
                      uppercase
                    "
                  >
                    {bean.roast}
                  </p>
                </div>

                {/* 이미지 영역 */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-20 h-20 border-2 border-[#b59b8a] bg-white p-1.5 shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={bean.image}
                      alt={bean.name}
                      className="w-full h-full object-cover opacity-100 duration-500"
                    />
                  </div>
                  <span className="text-[#735e54] font-semibold text-xs tracking-[0.25em] uppercase bg-[#ede6dc] px-2 py-0.5 rounded">
                    {bean.taste}
                  </span>
                </div>
              </div>

              <p className="text-[#4a3b32] font-normal leading-[2.1] text-sm mb-10 max-w-xl">
                {bean.desc}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-6">
                <span className="text-[#a0522d] font-semibold text-xs tracking-[0.3em] uppercase bg-[#ebdcd0] px-2.5 py-1 rounded">
                  {bean.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL POPUP */}
        <AnimatePresence>
          {selectedBean && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0
                bg-black/50
                backdrop-blur-sm
                flex
                items-center
                justify-center
                z-[100]
                p-4
              "
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="
                  relative
                  w-[95%]
                  md:w-[90%]
                  max-w-4xl
                  max-h-[90vh]
                  overflow-y-auto
                  bg-[#f7f4ef]
                  text-[#2c221e]
                  p-6
                  md:p-12
                  shadow-2xl
                  border
                  border-[#dcd2c6]
                "
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* IMAGE */}
                  <div className="h-[220px] md:h-[450px] overflow-hidden rounded-sm border-2 border-[#b59b8a] bg-white p-2 shadow-md">
                    <img
                      src={selectedBean?.image}
                      alt={selectedBean.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3 text-[#a0522d]">
                        {selectedBean.country} · {selectedBean.roast}
                      </p>

                      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#1a120f]">
                        {selectedBean.name}
                      </h2>

                      <p className="text-[#4a3b32] leading-relaxed text-sm mb-6">
                        {selectedBean.desc}
                      </p>

                      <div className="text-xs font-semibold tracking-[0.25em] uppercase mb-6 inline-block bg-[#ede6dc] px-2.5 py-1 rounded text-[#a0522d]">
                        {selectedBean.note}
                      </div>

                      <div className="space-y-3 text-sm leading-relaxed text-[#5c4a42] border-t border-[#dcd2c6] pt-4">
                        <p>맛 프로필: {selectedBean.taste}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedBean(null)}
                      className="
                        mt-8
                        w-full
                        bg-[#a0522d]
                        text-white
                        py-4
                        text-xs
                        font-semibold
                        tracking-[0.3em]
                        uppercase
                        hover:bg-[#854223]
                        transition-colors
                        duration-300
                        shadow-sm
                      "
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedBean(null)}
                  className="
                    absolute
                    top-4
                    right-4
                    w-8
                    h-8
                    flex
                    items-center
                    justify-center
                    text-[#a0522d]
                    bg-white/90
                    backdrop-blur-sm
                    border
                    border-[#dcd2c6]
                    shadow-md
                    rounded-full
                    hover:scale-110
                    hover:bg-[#a0522d]
                    hover:text-white
                    transition-all
                    duration-200
                    ease-out
                    group
                    z-10
                  "
                >
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 ease-out group-hover:rotate-90" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}