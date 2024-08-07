// @flow strict

import { personalData } from "@/utils/data/personal-data";
import GitHubCalendar from "react-github-calendar";

async function Graph() {

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Activity Graph
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full flex justify-center py-12">
        <GitHubCalendar
          username="BrentHoskins84"
          blockSize={14}
        />
      </div>
    </div>
  );
};

export default Graph;
