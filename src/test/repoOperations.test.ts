

import { generateFakeData } from '../data/fakeRepos';
import {getData} from '../data/getData'

import { filterByStars, getLatesUpdatedtRepos, sumOfStars } from '../repoOperations';




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

 
});





