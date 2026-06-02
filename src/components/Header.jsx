import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
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

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4 md:py-5">

        <h1
          onClick={() => navigate("/")}
          className="
            text-white
            text-lg md:text-2xl
            font-bold
            cursor-pointer
            hover:text-gray-300
            duration-300
          "
        >
          Premium Roastery
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
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
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-white
            text-3xl
          "
        >
          ☰
        </button>
        {
          menuOpen && (
            <div
              className="
                md:hidden
                absolute
                top-full
                left-0
                w-full
                bg-black/95
                backdrop-blur-md
                border-t
                border-white/10
              "
            >
              <div className="flex flex-col items-center py-6 gap-6">

                <NavLink
                  to="/"
                  className={navStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  MAIN
                </NavLink>

                <NavLink
                  to="/bean"
                  className={navStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  원두
                </NavLink>

                <NavLink
                  to="/blending"
                  className={navStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  블렌딩
                </NavLink>

                <NavLink
                  to="/root"
                  className={navStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  오시는 길
                </NavLink>

              </div>
            </div>
          )
        }
      </div>

    </header>
  );
}

export default Header;