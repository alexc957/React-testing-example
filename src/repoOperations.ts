import { IRepository } from "./IRepository";

export const filterByStars = (repos: IRepository[], numStars: number = 5) => {
  return repos.filter((repo) => repo.stargazers_count > numStars);
};

export const sumOfStars = (repos: IRepository[]) => {
  return repos.reduce((prev, curr) => {
    return prev + curr.stargazers_count;
  }, 0);
};

export const getLatesUpdatedtRepos = (
  repos: IRepository[],
  numRepos: number = 5
) => {
  const repoCopy = [...repos];

  const sortedRepos = repoCopy.sort((a, b) => {
    const dateA = new Date(a.updated_at);
    const dateB = new Date(b.updated_at);
    return Number(dateB) - Number(dateA);
  });

  return sortedRepos.length > numRepos
    ? sortedRepos.slice(0, numRepos)
    : sortedRepos;
};
