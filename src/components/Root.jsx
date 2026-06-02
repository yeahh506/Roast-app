// Contact.jsx
import Header from "./Header";
import Footer from "./Footer";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#111] text-white min-h-screen">
      <Header />

      {/* HERO */}
      <section
        className="
          relative
          h-[50vh]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-40
          "
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <p className="text-orange-300 tracking-[0.4em] uppercase mb-5">
            Visit Us
          </p>

          <h1 className="text-6xl font-bold mb-6">
            오시는 길
          </h1>

          <p className="text-white/70 max-w-2xl leading-relaxed">
            HEAGIN Roastery 에서
            깊고 풍부한 커피 경험을 만나보세요.
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* 지도 */}
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=송도%20G타워&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            />
          </div>



          {/* 정보 */}
          <div className="flex flex-col justify-center">

            <p className="text-orange-300 tracking-[0.3em] uppercase mb-5">
              Contact Information
            </p>

            <h2 className="text-5xl font-bold mb-10 leading-tight">
              당신의 하루를 위한
              <br />
              특별한 로스터리
            </h2>

            <div className="space-y-8 text-white/70">

              <div className="flex gap-5">
                <MapPin
                  size={24}
                  className="text-orange-300 mt-1"
                />

                <div>
                  <h3 className="text-white text-lg mb-2">
                    Address
                  </h3>

                  <p>
                    인천광역시 연수구 아트센터대로 175 
                    <br />
                     G-Tower 2층 HEAGIN
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone
                  size={24}
                  className="text-orange-300 mt-1"
                />

                <div>
                  <h3 className="text-white text-lg mb-2">
                    Phone
                  </h3>

                  <p>032-814-2727</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail
                  size={24}
                  className="text-orange-300 mt-1"
                />

                <div>
                  <h3 className="text-white text-lg mb-2">
                    Email
                  </h3>

                  <p>haeginroasting@naver.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock
                  size={24}
                  className="text-orange-300 mt-1"
                />

                <div>
                  <h3 className="text-white text-lg mb-2">
                    Opening Hours
                  </h3>

                  <p>
                     Mon - Fri | 08:00 - 18:00
                    <br />
                    Sat - Sun & Holidays | Closed
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}