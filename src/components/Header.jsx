import boxicons from "boxicons";
import React from "react";

const heder = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20`">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0 "
      >
        SCODE
      </h1>
      {/* Desktop Navigation  */}
      <nav className=" hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          HOME
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          COMPANY
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          FEATURES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          DOCS
        </a>
      </nav>
      <button
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="hidden md:block bg-[a7a7a7] text-white py-3 px-8 rounded-full border-none font-medium transition-all duriation-500 hover:bg-orange-400 cursor-pointer z-50"
      >
        SIGN IN
      </button>
      {/* Mobile menue button - visible only for mobile devices */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <box-icon name="menu" color="#ffffff"></box-icon>
      </button>

      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 bg-blend-normal"
      >
        <nav className="flex flex-col gap-6 item-center ">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            HOME
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            COMPANY
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            FEATURES
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            DOCS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default heder;
