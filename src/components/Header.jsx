import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  // 🔥 여기 추가
  const navStyle = ({ isActive }) =>
    `
      duration-300
      hover:text-orange-300
      ${
        isActive
          ? "text-orange-300"
          : "text-white"
      }
    `;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1
          onClick={() => navigate("/")}
          className="
            text-white
            text-2xl
            font-bold
            cursor-pointer
            hover:text-gray-300
            duration-300
          "
        >
          Premium Roastery
        </h1>

        <nav className="flex gap-8 text-sm">
          
          {/*<a href="#menu" className="hover:text-orange-300 duration-300"> 소개 </a> <a href="#menu" className="hover:text-orange-300 duration-300"> 원두 </a> <a href="#gallery" className="hover:text-orange-300 duration-300"> 갤러리 </a> */}
         
          <NavLink to="/" className={navStyle}>
            MAIN
          </NavLink>

          <NavLink to="/bean" className={navStyle}>
            원두
          </NavLink>

          <NavLink to="/blending" className={navStyle}>
            블렌딩
          </NavLink>

           <NavLink to="/root" className={navStyle}>
            오시는 길
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Header;