import { motion } from 'framer-motion'
import mainVideo from '../assets/main.mp4'
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          object-cover
        "
      >

        <source
          src={mainVideo}
          type="video/mp4"
        />

      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      {/* 메인 텍스트 */}
 <div
  className="
    relative
    z-10
    h-full
    flex
    flex-col
    justify-center
    items-center
    text-center
    text-white
    px-5
  "
>

  <p
    className="
      uppercase
      tracking-[0.4em]
      text-sm
      mb-6
      text-orange-200
    "
  >
    Premium Roastery
  </p>

 <motion.h2
 initial={{
    opacity:0,
    y:-200,
    filter:'blur(10px)'
  }}

  animate={{
    opacity:1,
    y:0,
    filter:'blur(0px)'
  }}

  transition={{
    type:'spring',
    stiffness:30,
    damping:6,
    mass:1
  }}

  className="
    text-6xl
    md:text-8xl
    font-light
    leading-tight
    
    drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]
    "

  style={{
    fontFamily:'Playfair Display'
  }}
>

  Crafted <br />
  Coffee Experience

</motion.h2>
  

        <a
          href="#menu"
          className="
            inline-block
            mt-16
            border
            border-white
            px-10
            py-4
            text-white
            tracking-[0.2em]
            uppercase
            text-sm
            hover:bg-white
            hover:text-black
            duration-500
            backdrop-blur-sm
          "
        >
          Explore Beans
        </a>

      </div>

    </section>

  )
}

export default Hero