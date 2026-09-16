import { useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";

export default function Blending() {
  {/* 스크롤 조절 */}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [selectedBlend, setSelectedBlend] = useState(null);
  
  const blends = [
    {
      id: 22,
      name: "시그니처 골드 Signature Gold",
      subtitle: "Warm & Balanced",
      desc: "케냐 블렌딩 / 묵직한 바디감과 브라운 슈가와 아몬드의 달콤한 맛.",
      note: "Dark Cacao · Almond · Velvet Body",
      color: "#a0522d",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
      orderLink: "https://naver.com",
    },
    {
      id: 23,
      name: "스위트 브라운 Sweet Brown",
      subtitle: "Soft & Sweet",
      desc: "콜롬비아 블렌딩 / 청사과의 산미와 고소하고 부드러운 맛.",
      note: "Sweet · Caramel · Brown Sugar · Creamy",
      color: "#8a5a3b",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      orderLink: "https://map.naver.com/p/entry/place/1969942447?lng=126.6341499&lat=37.3960863&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605211551&locale=ko&svcName=map_pcv5&searchType=place&c=15.00,0,0,0,dh",
    },
    {
      id: 24,
      name: "퓨어 엘로우 Pure Yellow",
      subtitle: "Bright & Citrus",
      desc: "예가체프 블렌딩 / 상큼한 과일의 산미와 캐슈넛의 단맛, 여운이 남는 깔끔한 맛.",
      note: "Citrus · Honey · Clean Finish",
      color: "#b8860b",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
      orderLink: "/order/signature-gold",
    },
    {
      id: 25,
      name: "스모키 블루 Smoky Blue",
      subtitle: "Deep & Woody",
      desc: "과테말라 블렌딩 / 스모크향이 특징이며 라임의 산미, 은은한 단맛.",
      note: "Oak · Smoky · Heavy Body",
      color: "#465c69",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop",
      orderLink: "/order/signature-gold",
    },
    {
      id: 26,
      name: "스페셜 그린 Special Green",
      subtitle: "Fresh & Herbal",
      desc: "페루 블렌딩 / 호밀빵의 고소함과 다크초콜릿의 쌉쌀한 맛.",
      note: "Herbal · Green Tea · Light Finish",
      color: "#4a6b41",
      image:
        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1200&auto=format&fit=crop",
      orderLink: "/order/signature-gold",
    },
  ];

  const [tasteFilter, setTasteFilter] = useState("ALL");

  const tastes = [
    "ALL",
    "Sweet",
    "Nutty",
    "Citrus",
    "Smoky",
    "Herbal",
  ];

  const filteredBlends = useMemo(() => {
    if (tasteFilter === "ALL") return blends;

    return blends.filter((blend) =>
      blend.note.toLowerCase().includes(tasteFilter.toLowerCase())
    );
  }, [tasteFilter, blends]);

  return (
    <div className="bg-[#f7f4ef] text-[#2c221e] min-h-screen overflow-hidden">
      <Header />

      {/* 맨 윗 부분 제목  */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-18 md:pt-22 pb-6 md:pb-5">
        <div className="flex items-end justify-between gap-5 flex-wrap border-b border-[#dcd2c6] pb-6">
          <div>
            {/* <p className="text-[#a0522d] font-semibold tracking-[0.35em] uppercase text-xs mb-2">
              Collection
            </p> */}

            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-[#1a120f]">
              Signature Blends
            </h1>
          </div>

          <p className="text-[#5c4a42] text-sm leading-[2] max-w-md">
            각 블렌드는 서로 다른 특징을 살려
            특별한 풍미와 향을 완성합니다.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="border border-[#dcd2c6] bg-white p-8 md:p-12 shadow-sm">
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-[#a0522d] font-semibold text-xs tracking-[0.35em] uppercase mr-8">
              Blend Profile
            </p>

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
      </section>

      {/* BLEND LIST */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-[1px] bg-[#dcd2c6]">
          {filteredBlends.map((blend) => (
            <div
              key={blend.id}
              onClick={() => setSelectedBlend(blend)}
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
              <div className="flex justify-between items-start mb-16">
                <div>
                  <p
                    className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                    style={{ color: blend.color }}
                  >
                    {blend.subtitle}
                  </p>

                  <h2
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-4xl
                      font-semibold
                      leading-tight
                      mb-1
                      text-[#1a120f]
                    "
                  >
                    {blend.name}
                  </h2>
                </div>

                <span
                  className="
                    w-3 h-3
                    md:w-4 md:h-4
                    rounded-full
                    mt-2
                    shrink-0
                    shadow-sm
                  "
                  style={{ backgroundColor: blend.color }}
                />
              </div>

              <p
                className="
                  text-[#4a3b32]
                  text-sm
                  md:text-base
                  leading-relaxed
                  md:leading-loose
                  max-w-xl
                  mb-6
                  md:mb-10
                "
              >
                {blend.desc}
              </p>

              <div
                className="text-xs font-semibold tracking-[0.25em] uppercase inline-block bg-[#ede6dc] px-2.5 py-1 rounded"
                style={{ color: blend.color }}
              >
                {blend.note}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedBlend && (
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
              {/* 양피지 모달 팝업 */}
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
                <div className="grid md:grid-cols-2 gap-8">
                  {/* IMAGE */}
                  <div className="h-[220px] md:h-[450px] overflow-hidden rounded-sm bg-[#2c1405] p-1 shadow-md">
                    <img
                      src={selectedBlend?.image}
                      alt={selectedBlend.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex flex-col justify-between">
                    <div>
                      <p
                        className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
                        style={{ color: selectedBlend.color }}
                      >
                        {selectedBlend.subtitle}
                      </p>

                      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#1a120f]">
                        {selectedBlend.name}
                      </h2>

                      <p className="text-[#4a3b32] leading-relaxed text-sm mb-6">
                        {selectedBlend.desc}
                      </p>

                      <div
                        className="text-xs font-semibold tracking-[0.25em] uppercase mb-6 inline-block bg-[#ede6dc] px-2.5 py-1 rounded"
                        style={{ color: selectedBlend.color }}
                      >
                        {selectedBlend.note}
                      </div>

                      <div className="space-y-3 text-sm leading-relaxed text-[#5c4a42] border-t border-[#dcd2c6] pt-4">
                        {/* <p>서로 다른 산지의 원두가 조화를 이루며 깊고 균형감 있는 풍미를 완성합니다.</p>
                        <p>늦은 밤의 서재와 오래된 로스터리의 공기를 담아낸 시그니처 블렌드입니다.</p> */}
                      </div>
                    </div>

                    <button
                      onClick={() => window.open(selectedBlend.orderLink, "_blank")}
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
                      Order Now
                    </button>
                  </div>
                </div>
                
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedBlend(null)}
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