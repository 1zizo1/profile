
const Home = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 p-4">
        <div className="mb-6">
          <img
            src="/hero-img.png"  // Ensure the correct path to your image
            alt="Profile"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-white mx-auto"
          />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Hi, I'm Zoz</h1>
        <p className="text-lg sm:text-xl mb-4">A Front-end Developer</p>
        <a
          href="/path-to-cv.pdf"  
          download
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          Download CV
        </a>      </div>
    </section>
  );
};

export default Home;
