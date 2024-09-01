import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="#about" className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src=""
          alt=""
          width={1280}
          height={1920}
          className="max-w-full sm:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-3">
            I am Sazzat Hossain, a dedicated and ambitious web developer with a
            strong passion for creating innovative and user-centric web
            applications. My expertise spans a broad range of modern web
            technologies, including Next.js, React.js, Redux.js, JavaScript,
            TypeScript, Prisma, Mongoose, Express.js, MongoDB, and Tailwind CSS.
            I recently completed a full-stack project, 'Travel Nest' a hotel
            booking application that showcases my ability to integrate complex
            features with a focus on security, usability, and performance.
          </p>
          <p className="pb-3">
            As a developer, I thrive on solving complex problems and building
            intuitive designs that enhance user experiences. I am committed to
            continuous learning and improvement, with the goal of becoming one
            of the top professional web developers in the industry. My work
            ethic is defined by perseverance and attention to detail, ensuring
            that I deliver high-quality, scalable solutions.
          </p>
          <p className="pb-3">
            I am a collaborative team player who enjoys working in dynamic
            environments, and I am always eager to contribute to projects that
            push the boundaries of what is possible with web development.
          </p>
          <Link href="#contact" className="btn btn-accent">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
