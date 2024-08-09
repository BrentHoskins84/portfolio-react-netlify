// @flow strict

import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";

async function Statistics() {

  return (
    <>
      <div className="py-8">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
              Github Statistics
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto">

        <div className="column-1 gap-4 lg:gap-8">
          <div className="order-1 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
              </div>
              <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-200"></div>
                </div>
              </div>
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 flex justify-center">
                <Image
                    src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${personalData.githubUser}&theme=transparent`}
                    width={1080}
                    height={520}
                    alt="github profile-details"
                    className="rounded-lg "
                  />
              </div>
          </div>
        </div>

        <div className="columns-1 lg:columns-2  gap-4 lg:gap-8">

          <div className="pt-4 md:pt-8">
            <div className="order-1 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-fit">
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
              </div>
              <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-200"></div>
                </div>
              </div>
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <Image
                    src={`https://github-readme-stats.vercel.app/api?username=${personalData.githubUser}&show_icons=true&rank_icon=github&include_all_commits=true&theme=transparent&hide_border=true`}
                    width={1080}
                    height={520}
                    alt="github profile-details"
                    className="rounded-lg "
                  />
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-8">
            <div className="order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-fit">
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
              </div>
              <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-200"></div>
                </div>
              </div>
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <Image
                    src={`https://github-readme-stats.vercel.app/api?username=${personalData.githubUser}&show_icons=true&rank_icon=github&include_all_commits=true&theme=transparent&hide_border=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&hide=stars,commits,prs,issues,contribs`}
                    width={1080}
                    height={520}
                    alt="github profile-stats"
                    className="rounded-lg "
                  />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Statistics;
