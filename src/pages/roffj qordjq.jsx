import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: 1,
    src: "/img1.png",
    title: "에티오피아",
    desc: "시트러스한 산미, 화사한 꽃향기, 베리류의 달콤함",

    detail: [
      "꽃향기와 베리 계열의 산뜻한 풍미",
      "가볍고 밝은 산미가 특징",
      "핸드드립 추천"
    ],

    story:
      "오래된 로스터리 기록에 따르면 에티오피아 원두는 가장 신비로운 향을 가진 원두로 기록되어 있습니다.",

    orderLink: "/order/ethiopia"
  },

  {
    id: 2,
    src: "/img2.png",
    title: "케냐",
    desc: "커피의 발상지에서 피어난 화려한 아로마",

    detail: [
      "자몽 같은 산미와 묵직한 향",
      "풍부한 과일향",
      "아이스 커피 추천"
    ],

    story:
      "붉은 화산 토양에서 자란 케냐 원두는 강렬한 향과 깊은 바디감을 품고 있습니다.",

    orderLink: "/order/kenya"
  }
];

function GalleryDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [openPaper, setOpenPaper] = useState(false);

  const item = data.find(
    (d) => d.id === Number(id)
  );

  if (!item) {
    return (
      <div className="text-white p-20">
        존재하지 않는 페이지입니다.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1b1512] text-white px-10 py-20 relative overflow-hidden">

      {/* 닫기 */}
      <button
        onClick={() => navigate(-1)}
        className="
          absolute
          top-8
          right-8

          text-4xl
          text-white/70

          hover:text-amber-200
          duration-300

          z-50
        "
      >
        ×
      </button>

      <div
        className="
          max-w-6xl
          mx-auto

          flex
          flex-col
          md:flex-row

          items-center
          gap-16
        "
      >

        {/* 이미지 */}
        <div className="flex-1 relative">

          <img
            src={item.src}
            alt={item.title}
            onClick={() => setOpenPaper(true)}
            className="
              w-full
              max-w-[500px]
              h-[600px]

              object-cover

              rounded-tl-[60px]
              rounded-br-[60px]

              shadow-2xl

              cursor-pointer

              hover:scale-[1.02]
              duration-500
            "
          />

          <p
            className="
              mt-4
              text-[#8b7355]

              tracking-[0.2em]
              text-sm
            "
          >
            CLICK TO OPEN THE ARCHIVE
          </p>

        </div>

        {/* 설명 */}
        <div className="flex-1">

          <h1
            className="
              text-6xl
              font-bold

              mb-8

              text-[#e7d2b2]
            "
          >
            {item.title}
          </h1>

          <p
            className="
              text-[#c8b79d]
              text-lg
              leading-relaxed
            "
          >
            {item.desc}
          </p>

          <div
            className="
              mt-10
              space-y-4

              text-[#9f8b74]
            "
          >
            {item.detail?.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}
          </div>

          <button
            onClick={() => navigate(item.orderLink)}
            className="
              mt-12

              px-8
              py-4

              border
              border-[#8b7355]

              rounded-full

              text-[#d6b98c]

              bg-transparent

              hover:bg-[#8b7355]
              hover:text-[#1b1512]

              hover:shadow-[0_0_20px_rgba(214,185,140,0.4)]

              duration-500

              tracking-[0.15em]
            "
          >
            주문하기 →
          </button>

        </div>

      </div>

      {/* 양피지 */}
      <AnimatePresence>

        {openPaper && (

          <motion.div

            initial={{
              opacity: 0,
              scaleY: 0,
              rotateX: -15
            }}

            animate={{
              opacity: 1,
              scaleY: 1,
              rotateX: 0
            }}

            exit={{
              opacity: 0,
              scaleY: 0
            }}

            transition={{
              duration: 0.7,
              ease: "easeInOut"
            }}

            className="
              fixed
              inset-0

              bg-black/70

              flex
              items-center
              justify-center

              z-[100]
            "
          >

            {/* 양피지 */}
            <motion.div

              initial={{
                y: 100
              }}

              animate={{
                y: 0
              }}

              exit={{
                y: 100
              }}

              className="
                relative

                w-[90%]
                max-w-3xl

                bg-[#d6c2a1]

                rounded-[40px]

                p-14

                shadow-[0_0_80px_rgba(0,0,0,0.7)]

                border-4
                border-[#9f7b4f]
                "
               // style={{
               // backgroundImage: "url('/paper.png')",
               // backgroundSize: "cover",
               // backgroundPosition: "center"
              //}}
             
            >

              {/* 닫기 */}
              <button
                onClick={() => setOpenPaper(false)}
                className="
                  absolute
                  top-6
                  right-8

                  text-3xl

                  text-[#5c4632]

                  hover:text-black

                  duration-300
                "
              >
                ×
              </button>

              <p
                className="
                  text-[#7b5d3d]

                  tracking-[0.3em]
                  text-sm

                  mb-6
                "
              >
                SECRET ARCHIVE
              </p>

              <h2
                className="
                  text-5xl

                  text-[#3a2d21]

                  font-bold

                  mb-10
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  text-[#4b3a2d]

                  leading-loose
                  text-lg
                "
              >
                {item.story}
              </p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default GalleryDetail;

