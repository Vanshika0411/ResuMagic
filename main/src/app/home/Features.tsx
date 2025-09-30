import Image from "next/image";

// ✅ Reusable Button (unchanged)
const Button = ({ variant, className, children }: any) => {
  return (
    <button
      className={`px-6 py-2 rounded text-white font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

// ✅ Team Member Card
const PersonCard = ({
  name,
  role,
  image,
  github,
  linkedin,
}: {
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
}) => {
  return (
    <div className="p-6 border border-gray-200 rounded-2xl shadow-md text-center bg-white transition-transform hover:scale-105 hover:shadow-lg">
      <div className="w-[120px] h-[120px] mx-auto rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      <div className="flex justify-center gap-4">
        <a href={github} target="_blank" rel="noreferrer">
          <Image src="/assets/github.png" alt="GitHub" width={24} height={24} />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <Image src="/assets/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

// ✅ Main Section (About Us)
export const Features = () => {
  return (
    <div className="w-full md:w-[85%] xl:w-[80%] mx-auto my-32 py-12 px-8 rounded-3xl shadow-xl bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-4 text-sky-900">
        About us
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        A bunch of developers and designers — who love to build open source projects and learn along!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <PersonCard
          name="Vanshika Jain"
          role="Frontend Developer"
          image="/assets/vanshi.jpg"
          github="https://github.com/Vanshika0411"
          linkedin="https://www.linkedin.com/in/vanshika-jain-71b45b2b3/"
        />
        <PersonCard
          name="Saurav Singh"
          role="Full Stack Developer"
          image="/assets/saurav.jpg"
          github=""
          linkedin=""
        />
      </div>
    </div>
  );
};
