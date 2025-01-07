const Experience = () => {
    // Static data for experiences
    const experiences = [
      {
        date: "2018 - 2022",
        title: "UI/UX Designer",
        company: "Company Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        date: "2018 - 2022",
        title: "Full-Stack Developer",
        company: "Company Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        date: "2018 - 2022",
        title: "Frontend Developer",
        company: "Company Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
    ];
  
    return (
      <div className="container mx-auto px-8 py-12 bg-[#121212]">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <section className="col">
            <header className="title text-green-600 font-bold text-2xl py-4 pl-7">
              <h2>EXPERIENCE</h2>
            </header>
            <div className="contents pl-7 border-l-4 border-green-600 space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="box relative p-6 border border-gray-300 bg-white cursor-pointer hover:shadow-xl hover:border-transparent transition-all duration-300 mb-6 rounded-lg"
                >
                  <div className="absolute w-4 h-4 rounded-full right-[calc(100%+22px)] top-0 bg-green-600 border-2 border-white"></div>
                  <h4 className="text-green-600 font-medium text-lg">{exp.date}</h4>
                  <h3 className="text-xl font-semibold text-gray-800 py-2">{exp.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{exp.company}</p>
                  <p className="text-gray-700 text-base">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default Experience;
  