import { useParams, useNavigate } from "react-router-dom";

const beanList = [
  {
    id:1,
    name:'에티오피아 예가체프',
    desc:'꽃향과 산미가 매력적인 원두',
    price:'18,000원',
    img:'/bean1.jpg',
    detail:[
      '플로럴한 향미',
      '밝은 산미',
      '핸드드립 추천'
    ]
  },

  {
    id:2,
    name:'콜롬비아 수프리모',
    desc:'부드럽고 고소한 밸런스',
    price:'16,000원',
    img:'/bean2.jpg',
    detail:[
      '고소한 견과류 향',
      '부드러운 바디감',
      '데일리 커피 추천'
    ]
  }
];

function MenuDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const item = beanList.find(
    (bean) => bean.id === Number(id)
  );

  if (!item) return <div>존재하지 않는 메뉴입니다.</div>;

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white px-10 py-20">

      <button
        onClick={() => navigate(-1)}
        className="
          absolute
          top-8
          right-8

          text-4xl
          text-white/50

          hover:text-white
          duration-300
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

        <div className="flex-1">
          <img
            src={item.img}
            alt={item.name}
            className="
              w-full
              max-w-[500px]
              h-[600px]
              object-cover

              rounded-3xl
            "
          />
        </div>

        <div className="flex-1">

          <h1 className="text-5xl font-bold mb-8">
            {item.name}
          </h1>

          <p className="text-gray-300 text-xl mb-6">
            {item.desc}
          </p>

          <p className="text-3xl font-bold mb-10">
            {item.price}
          </p>

          <div className="space-y-4 text-gray-400">
            {item.detail?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

            <button
            className="
                mt-10

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

    </div>
  );
}

export default MenuDetail;