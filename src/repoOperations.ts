import { IRepository } from "./IRepository";



export const filterByStars = (repos: IRepository[], numStars=5) => {


    
    return repos.filter((repo)=> repo.startgazers_count>numStars);
}



export const sumOfStars = (repos: IRepository[]) => {
    return repos.reduce((prev, curr)=> {
        return prev + curr.startgazers_count; 

    },0)
} 

export const getLatesUpdatedtRepos = (repos: IRepository[]) => {
    const repoCopy = [...repos]
    const sortedRepos  = repoCopy.sort((a,b)=> {
        const dateA = new Date(a.updated_at);
        const dateB  = new Date(b.updated_at);
        return Number(dateB) - Number(dateA);
    })

    return sortedRepos.length> 5  ? sortedRepos.slice(0,5) : sortedRepos;
} 