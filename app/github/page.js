// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Statistics from "../components/github/statistics";
import Projects from "../components/github/projects";
import Languanges from "../components/github/languages";
import Graph from "../components/github/graph";

async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/${personalData.githubUser}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${personalData.githubUser}+fork:false&sort=stars&per_page=10&type=Repositories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

async function page() {
  const profile = await getGitProfile();
  const projects = await getGitProjects();

  return (
    <div className="py-8">
      <Statistics/>
      <Projects projects={projects.items} profile={profile} />
      <Languanges/>
      <Graph/>
    </div>
  );
};

export default page;
