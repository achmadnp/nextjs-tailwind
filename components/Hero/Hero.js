const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="static max-w-7xl mx-0">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white opacity-30 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}
          <main className="mt-10 mx-auto ml-32 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center sm:text-center md:text-center lg:text-left xl:text-left 2xl:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-orange  sm:text-5xl sm:text-black md:text-6xl lg:text-white">
                <span className="block xl:inline">
                  The Smarter Way to Kickstart
                </span>
              </h1>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-orange-400 xl:inline">
                  your Business
                </span>
              </h1>
              <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-white">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute lg:inset-y-0 lg:right-0 lg:w-full bg-blend-lighten hover:bg-blend-darken">
        {/* <div className="backdrop-opacity-80 backdrop-blur absolute w-1/3 h-full"></div> */}
        <div className="bg-gradient-to-r  from-black via-gray-700 absolute w-2/4 h-full"></div>
        <img
          className="h-56 bg-black w-full object-fill sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/assets/logo/ITC.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
