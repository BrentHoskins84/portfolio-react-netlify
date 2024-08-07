// @flow strict

import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import GlowCard from '../../helper/glow-card';
import ProjectCard from './project-card';

async function Projects({ projects, profile }) {

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Git Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div id="projects" className="relative z-50">

      <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {
          projects.map(project => (
            <GlowCard key={project.id} identifier={`project-${project.id}`}>
              <ProjectCard project={project} />
            </GlowCard>
          ))
        }
      </div>

      <div className="w-full justify-center flex items-center">
        <Link href={profile.html_url} target='_blank' className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
          <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
            <span>View All Project</span>
            <FaLongArrowAltRight size={16} />
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Projects;
