// src/pages/BlendingDetail.jsx

import { useParams, useNavigate } from "react-router-dom";

export default function BlendingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    },

    {
      id: 23,
      name: "Sweet Brown",
      subtitle: "Soft & Sweet",
      desc: "콜롬비아 블렌딩 / 청사과의 산미와 고소하고 부드러운 맛.",
      note: "Sweet · Caramel · Brown Sugar · Creamy",
      color: "#8a5a3b",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 24,
      name: "Pure Yellow",
      subtitle: "Bright & Citrus",
      desc: "예가체프 블렌딩 / 상큼한 과일의 산미와 캐슈넛의 단맛.",
      note: "Citrus · Honey · Clean Finish",
      color: "#d6b75c",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 25,
      name: "Smoky Blue",
      subtitle: "Deep & Woody",
      desc: "과테말라 블렌딩 / 스모크향과 라임의 산미.",
      note: "Oak · Smoky · Heavy Body",
      color: "#4b5b6a",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      id: 26,
      name: "Special Green",
      subtitle: "Fresh & Herbal",
      desc: "페루 블렌딩 / 호밀빵의 고소함과 다크초콜릿의 쌉쌀함.",
      note: "Herbal · Green Tea · Light Finish",
      color: "#556b4f",
      image:
        "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const blend = blends.find((item) => item.id === Number(id));

  if (!blend) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Blend Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#140d0b] text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <img
          src={blend.image}
          alt={blend.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

          <button
          onClick={() => navigate(-1)}
          className="
            absolute
            top-20
            right-15

            /* 💡 핵심: 텍스트가 제자리에서 예쁘게 돌 수 있도록 블록화 및 중심축 고정 */
            inline-block
            origin-center

            text-4xl
            text-white/70

            /* 🔥 호버 상태: 90도 회전 및 색상 변경 */
            hover:rotate-90
            hover:text-amber-200

            /* 회전 애니메이션 속도와 궤적(ease-out으로 부드럽게 감속) 설정 */
            transition-all
            duration-500
            ease-out
          "
        >
          ×
        </button>

          <p
            className="uppercase tracking-[0.4em] text-sm mb-6"
            style={{ color: blend.color }}
          >
            {blend.subtitle}
          </p>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            {blend.name}
          </h1>

          <p className="max-w-2xl text-white/70 leading-relaxed text-lg mb-10">
            {blend.desc}
          </p>

          <div
            className="uppercase tracking-[0.25em] text-sm"
            style={{ color: blend.color }}
          >
            {blend.note}
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-32">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>
            <p
              className="uppercase tracking-[0.35em] text-xs mb-6"
              style={{ color: blend.color }}
            >
              Tasting Story
            </p>

            <h2 className="text-4xl font-light leading-[1.5] mb-10">
              깊고 섬세한 풍미가
              <br />
              천천히 이어지는 블렌드
            </h2>

            <p className="text-white/60 leading-[2.2]">
              각 원두의 개성을 조화롭게 블렌딩하여
              첫 향부터 마지막 여운까지 균형감 있는 맛을 완성했습니다.
              로스팅의 깊이와 원두의 산미,
              그리고 고소한 단맛이 자연스럽게 연결됩니다.
            </p>
          </div>

          <div className="relative">

            <img
              src={blend.image}
              alt={blend.name}
              className="w-full h-[600px] object-cover"
            />

            <div className="absolute inset-0 border border-[#c6a46a]/40" />

          </div>

        </div>

      </section>

    </div>
  );
}