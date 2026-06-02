import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const beanList = [
  {
    id:1,
    name:'에티오피아 예가체프',
    desc:'꽃향과 산미가 매력적인 원두',
    price:'18,000원',
    img:'/img (9).jpg',
    detail:[
      '플로럴한 향미',
      '밝은 산미',
      '핸드드립 추천'
    ]
  }
];

function MenuDetail() {
  {/*스크롤 조절*/}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { id } = useParams();

  const navigate = useNavigate();

  const item = beanList.find(
    (bean) => bean.id === Number(id)
  );

  if (!item) return <div>존재하지 않는 메뉴입니다.</div>;

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white pt-32 md:pt-40 pb-16 px-4 md:px-10 overflow-hidden relative">
      <div className="
      
        absolute
        top-1/2
        left-1/2

        w-[700px]
        h-[700px]

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        bg-[#8b7355]/10

        blur-[180px]

        pointer-events-none
      "
    />
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

      <div
        className="
          max-w-6xl
          mx-auto

          flex
          flex-col
          md:flex-row

          items-center
          gap-8
          md:gap-16
        "
      >

        <div className="flex-1 relative">
          <img
            src={item.img}
            alt={item.name}
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

       <div className="flex-1 text-center md:text-left">
        <div
          className="
            inline-block

            px-4
            py-2

            border
            border-[#8b7355]

            text-[#d6b98c]
            text-xs

            tracking-[0.15em]
            md:tracking-[0.3em]
            uppercase

            mb-6
          "
        >
          THIS MONTH'S BEAN
        </div>
          <h1
            className="
             text-3xl
              md:text-7xl

              font-bold

              leading-tight

              mb-6
            "
          >
            {item.name}
          </h1>

          <p
              className="
                text-gray-300

                text-base
                md:text-xl

                leading-relaxed

                max-w-xl

                mb-8
              "
            >
              이번 달 가장 신선하게 로스팅한 추천 원두입니다.
              화사한 꽃향과 밝은 산미가 어우러져
              핸드드립에서 특히 매력적인 풍미를 느낄 수 있습니다.
            </p>
            <div className="mb-10">

            <p className="text-sm tracking-[0.3em] text-[#8b7355] mb-2">
              SPECIAL PRICE
            </p>

            <p className="text-4xl md:text-5xl font-bold text-[#d6b98c]">
              {item.price}
            </p>

          </div>
          <div
            className="
              space-y-3
              text-gray-400

              text-sm
              md:text-base
            "
          >
            {item.detail?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

            <button
              className="
                mt-10

                w-full
                md:w-auto

                px-8
                py-4

                border
                border-[#8b7355]

                rounded-full

                text-[#d6b98c]

                hover:bg-[#8b7355]
                hover:text-[#1b1512]

                duration-500

                tracking-[0.15em]
              "
            >
            주문하기 →
            </button>

        </div>

      </div>

    </div>
  );
}

export default MenuDetail;