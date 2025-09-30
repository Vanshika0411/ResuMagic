import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
        Resume Ready Before You Blink
          <br />
        
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          
        From Click to Career in Seconds....
        </p>

        {/* Create Resume Button */}
        <Link href="/resume-import" className="btn-primary mt-6 lg:mt-14">
          Create Resume <span aria-hidden="true">→</span>
        </Link>

        {/* Resume Parser Button */}
        <div className="mt-4 flex items-center justify-center lg:justify-start">
          <p className="text-sm text-gray-600 mr-2">Already have a resume?</p>
          <Link
            href="/resume-parser"
            className="inline-flex items-center gap-2 rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-6h13v6m-3 0H6a2 2 0 01-2-2V5a2 2 0 012-2h9l5 5v10a2 2 0 01-2 2z"
              />
            </svg>
            Check with Parser
          </Link>
        </div>

        
      </div>

      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
