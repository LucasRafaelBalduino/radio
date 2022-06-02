import React from 'react'


const Header = () => {
  return (
<nav className="flex flex-wrap  justify-between  p-8 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
      <div className=" flex items-center">
          <a className="flex-shrink-0" href="">
            <img src="https://ebookpintor.tintasverginia.com.br/wp-content/themes/tintasverginia-lp/img/tintasverginia-logo.png" alt="" width="150" height="150"/>
          </a>
      </div>
      <div className="navbar-menu hidden md:block ">
            <a target="_blank"  href="https://intranet.tintasverginia.com.br/"  className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-yellow-50 hover:text-indigo-600" rel="noreferrer">
              INTRANET
            </a>

            <a target="_blank" className="block lg:inline-block mt-4 lg:mt-0 mr-10 font-bold text-yellow-50 hover:text-indigo-600" href="https://clube.tintasverginia.com.br/" rel="noreferrer">
              CLUBE
            </a>

      </div>

    </nav>
  )
}

export default Header
