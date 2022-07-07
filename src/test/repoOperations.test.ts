

import { generateFakeData } from '../data/fakeRepos';
import {getData} from '../data/getData'
import { IRepository } from '../IRepository';

import { filterByStars, getLatesUpdatedtRepos, pipe, sumOfStars } from '../repoOperations';




const mockRepos = () => generateFakeData()

jest.mock('../data/getData',()=> ({
    getData:  jest.fn(
        () => mockRepos()
    )
}));

let repos: any = [];
beforeAll(async ()=> {
        repos = await getData(""); 
});


describe("filterByStars",()=> {  
 

    
    test("when filtering the repositories without passing the numStars argument, must return all the repos with startgazers_count>5",()=> {
        const filteredRepos = filterByStars(repos,5)
        expect(filteredRepos.length).toBe(5)
    })
    
    

    test("when filtering the repositories that have more than 5 stars ",()=> {
        const filteredRepos = filterByStars(repos,5)
        expect(filteredRepos.length).toBe(5)  // some list that needs to be implements. 


    });

    test("when filtering the repositories that have a number of stars greater than a negative number",()=>{
        const filteredRepos = filterByStars(repos,-3)
        expect(filteredRepos).toEqual(repos)  // some list that needs to be implements. 

    })



  

});


describe("getLatesUpdatedtRepos",()=> {  
 
   

    test("when getting the 5 latest updated repositories. ",()=> {
        const latestRepos =getLatesUpdatedtRepos(repos);
        expect(latestRepos.length).toBe(5)  
        expect(latestRepos[0]).toEqual(repos[repos.length -1 ]);

    });

    test("when passing the number of repos to return is equal to the length of total of repositoires", ()=> {
        const latestRepos = getLatesUpdatedtRepos(repos, repos.length);
        expect(latestRepos.length ).toBe(repos.length)
    
})
});


describe("sumOfStars",()=> {  
    /*let repos: any = [];
    beforeAll(async ()=> {
            repos = await getData(""); // get the repos from the API, mock this lol 
           // console.log('repos ', repos)
    }); */

    test("when getting the sum of all the repositories stars ",()=> {
        const sum  = sumOfStars(repos)
        expect(sum).toBe(54)  // some number 
        

    });

    test("when passing an empty arry sum must be 0",()=> {
        const sum = sumOfStars([]);
        expect(sum).toBe(0);
    })

 
});


describe("pipe",()=> {

    test("when using all the functions in a pipe function with the default values ", ()=> {
        const pipeVal = pipe(
            filterByStars,
            getLatesUpdatedtRepos,
            sumOfStars
        )(repos)
        expect(pipeVal).toBe(40)

    });


    test("when passing the num of stars and num of latest updated repos", ()=> {
       
        const pipeVal = pipe(
            (repos: IRepository[]) => filterByStars(repos,6),
            (repos: IRepository[]) => getLatesUpdatedtRepos(repos,2),
            sumOfStars,  
        )(repos);

        expect(pipeVal).toBe(15);

    })
    
    

})





