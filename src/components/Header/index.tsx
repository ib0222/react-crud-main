import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 w-full bg-slate-950 h-20 z-50">
      <div className="max-w-7xl mx-auto h-full px-6">
        <div className="w-full h-full flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            Logo
          </a>
          <nav className="flex">
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            <ul className="hidden sm:flex gap-x-3 items-center">
              <li>
                <NavLink
                  to={"/add-customer"}
                  className="text-lg text-neutral-400/85 font-semibold rounded-md px-4 py-2"
                >
                  Add Customer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/customers"}
                  className="text-lg text-neutral-400/85 font-semibold rounded-md px-4 py-2"
                >
                  Customers List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/favorites"}
                  className="text-lg text-neutral-400/85 font-semibold rounded-md px-4 py-2"
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-slate-950 w-full absolute top-20 left-0 z-40">
          <ul className="flex flex-col items-center py-4">
            <li className="w-full">
              <NavLink
                to={"/add-customer"}
                className="block w-full text-center text-lg text-neutral-400/85 font-semibold py-2"
                onClick={toggleMenu}
              >
                Add Customer
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to={"/customers"}
                className="block w-full text-center text-lg text-neutral-400/85 font-semibold py-2"
                onClick={toggleMenu}
              >
                Customers List
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to={"/favorites"}
                className="block w-full text-center text-lg text-neutral-400/85 font-semibold py-2"
                onClick={toggleMenu}
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
