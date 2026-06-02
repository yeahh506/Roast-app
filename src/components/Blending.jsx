import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";

export default function Blending() {
  // 🔥 핵심 1: 선언한 navigate를 하단 카드 클릭 이벤트에 확실하게 연결해 줍니다.
const navigate = useNavigate();
const [selectedBlend, setSelectedBlend] = useState(null);
const blends = [
  {
    id: 22,
    name: "Signature Gold",
    subtitle: "Warm & Balanced",
    desc: " 케냐 블렌딩 / 묵직한 바디감과 브라운 슈가와 아몬드의 달콤한 맛.",
    note: "Dark Cacao · Almond · Velvet Body",
    color: "#c6a46a",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
    orderLink: "https://naver.com",
  },

  {
    id: 23,
    name: "Sweet Brown",
    subtitle: "Soft & Sweet",
    desc: "콜롬비아 블렌딩/ 청사과의 산미와 고소하고 부드러운 맛.",
    note: "Sweet · Caramel · Brown Sugar · Creamy",
    color: "#8a5a3b",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
     orderLink: "https://map.naver.com/p/entry/place/1969942447?lng=126.6341499&lat=37.3960863&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202605211551&locale=ko&svcName=map_pcv5&searchType=place&c=15.00,0,0,0,dh",
  },

  {
    id: 24,
    name: "Pure Yellow",
    subtitle: "Bright & Citrus",
    desc: "예가체프 블렌딩/ 상큼한 과일의 산미와 캐슈넛의 단맛, 여운이 남는 깔끔한 맛.",
    note: "Citrus · Honey · Clean Finish",
    color: "#d6b75c",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    orderLink: "/order/signature-gold",
  },

  {
    id: 25,
    name: "Smoky Blue",
    subtitle: "Deep & Woody",
    desc: "과테말라블렌딩/ 스모크향이 특징이며 라임의 산미, 치칸의 달콤한 맛.",
    note: "Oak · Smoky · Heavy Body",
    color: "#4b5b6a",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop",
    orderLink: "/order/signature-gold",
  },

  {
    id: 26,
    name: "Special Green",
    subtitle: "Fresh & Herbal",
    desc: "페루 블렌딩/ 호밀빵의 고소함과 다크초콜릿의 쌉쌀한 맛.",
    note: "Herbal · Green Tea · Light Finish",
    color: "#556b4f",
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
}, [tasteFilter]);

  return (

    <div className="bg-[#140d0b] text-white min-h-screen overflow-hidden">
     {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-40 pb-16">

        <div className="flex items-end justify-between gap-10 flex-wrap border-b border-[#3d2b22] pb-10">

            <div>
            <p className="text-[#b08a5a] tracking-[0.35em] uppercase text-s mb-5">
                원두 아카이브
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight text-[#f3eee8]">
                Roastery Archive
            </h1>
            </div>

            <p className="text-white/40 text-sm leading-[2] max-w-md">
                산지와 향, 로스팅의 밀도를 기준으로
                서로 다른 분위기의 원두를 기록합니다.
            </p>

        </div>

        </section>

{/* STORY */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,
    delay: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
>

</motion.section>
{/* FILTER */}
<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="border border-[#3d2b22] bg-[#1a120f] p-8 md:p-12">

    <div className="flex flex-wrap items-center gap-4">

      <p className="text-[#b08a5a] text-xs tracking-[0.35em] uppercase mr-8">
        Blend Profile
      </p>

      {tastes.map((taste) => (
        <button
          key={taste}
          onClick={() => setTasteFilter(taste)}
          className={`
            px-5 py-3
            border
            text-xs
            tracking-[0.25em]
            uppercase
            duration-300

            ${
              tasteFilter === taste
                ? "bg-[#b08a5a] text-black border-[#b08a5a]"
                : "border-[#4d3728] text-white/50 hover:border-[#b08a5a]"
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
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
              Collection
            </p>

            <h2 className="text-4xl font-bold">
              Signature Blends
            </h2>
          </div>

          <p className="text-white/50 max-w-lg leading-relaxed">
            각 블렌드는 서로 다른 특징을 살려
            특별한 풍미와 향을 완성합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-[1px] ">
           {filteredBlends.map((blend) => (
                <div
                key={blend.id}
                onClick={() => setSelectedBlend(blend)}
                className="
                    group
                    bg-[#140d0b]
                    p-10
                    cursor-pointer
                    hover:bg-[#1b1411]
                    duration-500
                "
                >
                <div className="flex justify-between items-start mb-16">
                    <div>
                    <p
                        className="text-sm tracking-[0.3em] uppercase mb-4"
                        style={{ color: blend.color }}
                    >
                        {blend.subtitle}
                    </p>

                    <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                        {blend.name}
                    </h2>
                    </div>

                    <span
                    className="w-3 h-3 rounded-full mt-4"
                    style={{ backgroundColor: blend.color }}
                    />
                </div>

                <p className="text-white/60 leading-loose text-sm max-w-xl mb-10">
                    {blend.desc}
                </p>

                <div
                    className="text-xs tracking-[0.25em] uppercase"
                    style={{ color: blend.color }}
                >
                    {blend.note}
                </div>
                </div>
            ))}
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
                      bg-black/70
                      backdrop-blur-sm
                      flex
                      items-center
                      justify-center
                      z-[100]
                    "
                  >

                    {/* 양피지 */}
                   <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.99,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.99,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className="
                        relative
                        w-[90%]
                        max-w-3xl
                        bg-[#1b1411]
                        p-14
                        shadow-[0_0_80px_rgba(0,0,0,0.7)]
                        border
                        border-[#4d3728]
                        overflow-hidden
                      "
                    >
                      
                      {/* texture */}
                      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/rice-paper-3.png')]" />

                      <div className="grid md:grid-cols-2">

                        {/* IMAGE */}
                        <div className="h-[320px] md:h-full overflow-hidden">
                          <img
                            src={selectedBlend?.image}
                            alt={selectedBlend.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="relative z-10 p-10 md:p-14">

                          <p
                            className="text-xs tracking-[0.3em] uppercase mb-5"
                            style={{ color: selectedBlend.color }}
                          >
                            {selectedBlend.subtitle}
                          </p>

                          <h2 className="text-4xl font-light mb-8">
                            {selectedBlend.name}
                          </h2>

                          <p className="text-white/60 leading-[2.1] text-sm mb-10">
                            {selectedBlend.desc}
                          </p>

                          <div
                            className="text-xs tracking-[0.25em] uppercase mb-12"
                            style={{ color: selectedBlend.color }}
                          >
                            {selectedBlend.note}
                          </div>

                          <div className="space-y-6 text-sm leading-[2] text-white/50">
                            <p>
                              서로 다른 산지의 원두가 조화를 이루며
                              깊고 균형감 있는 풍미를 완성합니다.
                            </p>

                            <p>
                              늦은 밤의 서재와 오래된 로스터리의 공기를
                              담아낸 시그니처 블렌드입니다.
                            </p>
                          </div>
                          <button
                           onClick={() => window.open(selectedBlend.orderLink, "_blank")}
                            className="
                              mt-12
                              w-full

                              border
                              border-[#6f563d]

                              py-4

                              text-sm
                              tracking-[0.3em]
                              uppercase

                              text-[#e7d6bf]

                              hover:bg-[#6f563d]
                              hover:text-black

                              duration-500
                            "
                          >
                            Order Now
                          </button>

                          {/* CLOSE */}
                          <button
                          onClick={() => setSelectedBlend(null)}
                          className="
                            absolute
                            top-6
                            right-6

                            w-12
                            h-12

                            flex
                            items-center
                            justify-center

                            text-4xl
                            text-white/70

                            hover:rotate-90
                            hover:text-amber-200

                            transition-all
                            duration-500
                            ease-in-out
                          "
                        >
                          ×
                        </button>

                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
      </section>

      {/* CTA */}
      {/*   <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto rounded-[36px] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1600&auto=format&fit=crop"
            alt="coffee beans"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-center py-24 px-8">
            <p className="uppercase tracking-[0.4em] text-cyan-300 text-sm mb-5">
              Premium Taste
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              당신만의 취향을 위한
              <br />
              특별한 블렌드
            </h2>

            <button
              onClick={() => navigate("/gallery")} // 갤러리로 돌아가기 링크 예시
              className="px-10 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 duration-300"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>*/}
    </div>
  );
}