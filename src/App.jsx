import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Blending from "./components/Blending";
import Bean from "./components/Bean";
import Root from "./components/Root";
import GalleryDetail from "./pages/GalleryDetail";
import MenuDetail from "./pages/MenuDetail";
import BlendingDetail from "./pages/BlendingDetail";


function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Gallery />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f5f1ea] text-[#2b2b2b]">
         <Header />
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<Home />} />

          {/*이달의 메뉴*/}
          <Route path="/menu" element={<Menu />} />

          {/* 이달의 메뉴 상세 페이지 */}
          <Route path="/menu/:id" element={<MenuDetail />} />
          
          {/* 갤러리 상세 페이지 */}
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          
          {/* 원두 페이지 */}
          <Route path="/bean" element={<Bean />} />

          {/* 블렌딩 전용 메뉴 */}
         <Route path="/blending" element={<Blending />} />
          
          {/* 블렌딩 상세 페이지 */}
         <Route path="/blending/:id" element={<BlendingDetail />} />

         {/* 원두 페이지 */}
          <Route path="/Root" element={<Root />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;