const STEPS = [
  {
    title: "Step 1: Choose a Template",
    text: "Start by selecting a professional resume template that suits your industry and experience level.",
    image: "/assets/template1.png",
  },
  {
    title: "Step 2: Fill in Your Details",
    text: "Enter your personal information, work experience, skills, and education. Use AI suggestions to improve content.",
    image: "/assets/details1.png",
  },
  {
    title: "Step 3: Customize & Download",
    text: "Adjust fonts, colors, and layout to match your style. Download in PDF, DOCX, or share online.",
    image: "/assets/custom1.png",
  },
];

export const Steps = () => {
  return (
    <>
      {/* 👇 Resume Steps Section */}
      <section className="mx-auto mt-16 px-6 lg:px-32 pb-20 pt-10 rounded-3xl bg-white shadow-2xl">
        <h1
          className="text-center text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text mb-12 tracking-wide"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          How to Build Your Resume
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {STEPS.map(({ title, text, image }, idx) => (
            <div
              key={idx}
              className="relative p-6 text-center border-[4px] border-sky-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <img
                src={image}
                alt={title}
                className="mx-auto mb-6 w-full h-52 object-cover rounded-xl"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>


      <div className="bg-resume-50 my-32">
        <div
          id="contribute"
          className="mx-6 md:mx-40 xl:mx-60 py-16 px-4 rounded-3xl shadow-xl bg-white border-4 border-grey-600"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <h2 className="text-center text-3xl font-bold text-resume-800 mb-12">
            Have a unique design in mind? Contribute your own resume template!
          </h2>

          <div className="grid grid-cols-12 items-center text-center gap-y-10 lg:gap-y-0">
            <div className="col-span-12 lg:col-span-4 flex flex-col items-center gap-3">
              <img
                src="data:image/jpeg;base64,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"
                alt="Palette Icon"
                className="h-16 w-16"
              />
              <p className="text-resume-800 text-xl font-medium">
                Want to create your own <strong>template?</strong>
              </p>
            </div>


            <div className="col-span-12 lg:col-span-1 text-4xl text-resume-800">
              <p>+</p>
            </div>


            <div className="col-span-12 lg:col-span-3 flex flex-col items-center gap-3">
              <img
                src="data:image/png;base64,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"
                alt="Terminal Icon"
                className="h-12 w-12"
              />
              <p className="text-resume-800 text-xl font-medium">
                Can you write <strong>React</strong> code?
              </p>
            </div>


            <div className="invisible lg:visible lg:col-span-1 text-4xl text-resume-800">
              <p>=</p>
            </div>


            <div className="col-span-12 lg:col-span-3 flex flex-col items-center gap-3">
              <img
                src="data:image/png;base64,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"
                alt="User generated"
                className="h-13 w-16"
              />
              <a
                href="https://github.com/Vanshika0411"
                target="_blank"
                rel="noreferrer"
              >
               <button className="bg-gray-200 text-black px-6 py-2 rounded-xl text-lg hover:bg-gray-300 transition-all duration-300 shadow-md">
  CONTRIBUTE
</button>

              </a>

           
          </div>
        </div>
      </div>
    </div >
    </>
  );
};
