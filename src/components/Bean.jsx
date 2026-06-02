import { useMemo, useState } from "react";
import Header from "./Header";
import { useEffect } from "react";

export default function Bean() {

   {/*스크롤 조절*/}
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const beans = [
    {
      id: 1,
      name: "Ethiopia Yirgacheffe",
      country: "Afirca",
      taste: "신맛",
      roast: "Light Roast",
      note: "Floral · Citrus · Tea Like",
      desc: "꽃향과 밝은 산미가 길게 이어지는 에티오피아 싱글 오리진.",
      image:
        "/img (2).jpg",
    },
    {
      id: 2,
      name: "Ethiopia 시다모",
      country: "Afirca",
      taste: "달콤",
      roast: "Medium Roast",
      note: "Caramel · Brown Sugar · Balanced",
      desc: "카라멜 계열의 단맛과 균형감 있는 바디가 특징입니다.",
      image:
        "/img (1).jpg",
    },
    {
      id: 3,
      name: "Ethiopia 아리차",
      country: "Afirca",
      taste: "고소",
      roast: "Medium Dark",
      note: "Nutty · Cocoa · Heavy Body",
      desc: "견과류의 고소함과 깊은 카카오 향이 인상적인 원두입니다.",
      image:
        "/img (3).jpg",
    },
    {
      id: 4,
      name: "Kenya AA",
      country: "Afirca",
      taste: "신맛",
      roast: "Light Roast",
      note: "Berry · Bright · Winey",
      desc: "베리류의 산뜻한 향과 와인 같은 산미가 살아있습니다.",
      image:
        "/img (4).jpg",
    },
    {
      id: 5,
      name: "르완다",
      country: "Afirca",
      taste: "고소",
      roast: "Medium Roast",
      note: "Chocolate · Almond · Smooth",
      desc: "부드러운 질감과 초콜릿 계열의 안정적인 풍미를 가집니다.",
      image:
        "/img (5).jpg",
    },
    {
      id: 6,
      name: "탄자니아 AAA",
      country: "Afirca",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (5).jpg",
    },
    {
      id: 7,
      name: "콜롬비아 수프리모",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (5).jpg",
    },
    {
      id: 8,
      name: "브라질",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (5).jpg",
    },
    {
      id: 9,
      name: "과테말라",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (5).jpg",
    },
    {
      id: 10,
      name: "엘살바도르",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (5).jpg",
    },
    {
      id: 11,
      name: "페루",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (5).jpg",
    },
    {
      id: 12,
      name: "온두라스",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (5).jpg",
    },
    {
      id: 13,
      name: "코스타리카",
      country: "Latin America",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (5).jpg",
    },
    {
      id: 14,
      name: "인도네시아-만델링",
      country: "Asia",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (14).jpg",
    },
    {
      id: 15,
      name: "파프아뉴기니",
      country: "Asia",
      taste: "쌉싸름",
      roast: "Dark Roast",
      note: "Earthy · Smoky · Deep",
      desc: "스모키한 향과 묵직한 쌉싸름함이 오래 남는 블렌드입니다.",
      image:
       "/img (15).jpg",
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
  }, [countryFilter, tasteFilter]);

  return (
    <div className="min-h-screen bg-[#140d0b] text-[#f3eee8] overflow-hidden">
      <Header />

      {/* HERO */}
       <section className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-40 pb-6 md:pb-10">

        <div className="flex items-end justify-between gap-10 flex-wrap border-b border-[#3d2b22] pb-10">

            <div>
            <p className="text-[#b08a5a] tracking-[0.35em] uppercase text-s mb-5">
                원두 아카이브
            </p>

            <h1 className="text-3xl md:text-6xl font-light leading-tight text-[#f3eee8]">
                Roastery Archive
            </h1>
            </div>

            <p className="text-white/40 text-sm leading-[2] max-w-md text-s md:text-sm">
                산지와 향, 로스팅의 밀도를 기준으로
                서로 다른 분위기의 원두를 기록합니다.
            </p>

        </div>

        </section>

      {/* FILTER */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="border border-[#3d2b22] bg-[#1a120f] p-8 md:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* COUNTRY */}
            <div>
              <p className="text-[#b08a5a] text-xs tracking-[0.3em] uppercase mb-6">
                Country
              </p>

              <div className="flex flex-wrap gap-3 overflow-x-auto">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => setCountryFilter(country)}
                    className={`
                      px-2 md:px-5
                      py-2 md:py-3

                      text-[11px]
                      md:text-xs

                      tracking-[0.1em]
                      md:tracking-[0.2em]

                      uppercase
                      border
                      duration-300

                      ${
                        countryFilter === country
                          ? "bg-[#b08a5a] text-black border-[#b08a5a]"
                          : "border-[#4d3728] text-white/60 hover:border-[#b08a5a]"
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
              <p className="text-[#b08a5a] text-xs tracking-[0.3em] uppercase mb-6">
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

                      tracking-[0.1em]
                      md:tracking-[0.2em]

                      uppercase
                      border
                      duration-300

                      ${
                        tasteFilter === taste
                          ? "bg-[#b08a5a] text-black border-[#b08a5a]"
                          : "border-[#4d3728] text-white/60 hover:border-[#b08a5a]"
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

        <div className="grid lg:grid-cols-2 gap-[1px]">

          {filteredBeans.map((bean) => (
            <div
              key={bean.id}
              className="group bg-[#140d0b] p-5 md:p-14 hover:bg-[#1b1411] duration-500"
            >
              <div className="flex justify-between items-start mb-12 gap-8">

                <div>
                  <p
                    className="
                      text-[#d6b98c]
                      font-medium
                      md:text-s
                      
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

                      font-light
                      leading-[1.3]

                      mb-2 md:mb-5
                    "
                  >
                    {bean.name}
                  </h2>

                  <p
                    className="
                      text-white/35

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

                <div className="w-20 h-20 border border-[#4d3728] p-1 overflow-hidden shrink-0">
                  <img
                    src={bean.image}
                    alt={bean.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 duration-500"
                  />
                </div>
              </div>

              <p className="text-white/55 leading-[2.1] text-sm mb-10 max-w-xl">
                {bean.desc}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-6">
                <span className="text-[#b08a5a] text-xs tracking-[0.3em] uppercase">
                  {bean.note}
                </span>

                <span className="text-white/25 text-xs tracking-[0.25em] uppercase">
                  {bean.taste}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
