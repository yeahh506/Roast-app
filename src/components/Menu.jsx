import { useNavigate } from "react-router-dom";

function Menu() {

  const navigate = useNavigate();

  const beanList = [
    {
      id:1,
      name:'에티오피아 예가체프',
      desc:'꽃향과 산미가 매력적인 원두',
      price:'18,000원',
      img:'/bean1.jpg'
    }  ]; 

   {/* {
      id:2,
      name:'콜롬비아 수프리모',
      desc:'부드럽고 고소한 밸런스',
      price:'16,000원',
      img:'/bean2.jpg'
    },

    {
      id:3,
      name:'케냐 AA',
      desc:'과일향과 진한 바디감',
      price:'20,000원',
      img:'/bean3.jpg'
    }*/}


  return (
    <section
  id="menu"
  className="
    py-16
    md:py-32
    px-4
    md:px-6
    bg-[#1b1512]
  "
>

      <div className="max-w-7xl mx-auto">

        <h2
          className="
            text-3xl md:text-5xl
            font-bold
            text-center
            mb-20

            tracking-[0.2em]

            text-[#d6b98c]
          "
        >
          TODAY'S BEANS
        </h2>

       <div className="max-w-4xl mx-auto">

          {beanList.map((bean, index) => (

            <div
              key={index}
              onClick={() => navigate(`/menu/${bean.id}`)}
               className="
                  bg-[#2a211c]

                  md:flex
                  md:items-center

                  rounded-3xl
                  overflow-hidden

                  border border-[#5c4632]

                  shadow-[0_0_40px_rgba(0,0,0,0.5)]

                  hover:-translate-y-2
                  hover:shadow-[0_0_60px_rgba(0,0,0,0.8)]

                  duration-500
                  cursor-pointer
                "
            >

              {/* 이미지 */}
              <div className="overflow-hidden md:w-1/2">
                <img
                  src={bean.img}
                  alt={bean.name}
                  className="
                    w-full
                    h-40
                    md:h-[500px]
                    object-cover
                    hover:scale-105
                    duration-500
                  "
                />
              </div>

              {/* 텍스트 */}
            <div className="p-6 md:p-12 md:w-1/2">

              <h3 className="text-lg md:text-4xl font-bold mb-4 text-[#f3e7d0]">
                  {bean.name}
                </h3>

                <p className="text-base md:text-lg text-[#b8a58a] mb-8 leading-relaxed">
                  {bean.desc}
                </p>

                <div className="flex items-center justify-between">

                <p className="font-bold text-2xl md:text-4xl text-[#d6b98c]">
                    {bean.price}
                  </p>

                  <span className="text-sm text-[#8b7355]">
                    자세히 보기 →
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Menu;