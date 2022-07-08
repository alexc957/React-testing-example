import { render, screen } from '@testing-library/react';
import React from 'react';
import Repos from '../components/Repos';
import { generateFakeData } from '../data/fakeRepos';
import { getData } from '../data/getData';
import { IRepository } from '../IRepository';
import { filterByStars, getLatesUpdatedtRepos } from '../repoOperations';


const mockRepos = () => generateFakeData()


jest.mock('../data/getData',()=> ({
    getData:  jest.fn(
        () => mockRepos()
    )
  }));
  
let repos: IRepository[] = [];
beforeAll(async ()=> {
          repos = await getData(""); 
  });


  describe("Repos.tsx", ()=>{
 

    describe("when the repos array is not empty",()=>{

        it("renders a list of repositories that have more than 5 stars",()=>{
            const filteredaRepos = filterByStars(repos, 5); 
            render(<Repos repos={filteredaRepos} title="Repositories with more than 5 stars "  />)
            const listEl =  screen.getAllByRole("listitem")
        
            expect(listEl.length).toBe(5)
        
          })
        
        it("renders a list of the five latest updated repositories",()=> {
            const filteredaRepos = getLatesUpdatedtRepos(repos); 
            render(<Repos repos={filteredaRepos} title="Last 5 updated repositories  "  />)
        
            const listEl = screen.getAllByRole("listitem")
        
            expect(listEl.length).toBe(5)
           
            const lastRepo = repos[repos.length -1 ];
       
            expect(screen.getByText(lastRepo.name)).toBeInTheDocument()
          })

    })

    describe("when passing an empty list to the Repos component", ()=> {
        it("does not render a list of items ",() => {
            render(<Repos repos={[]} title="Empty list "  />)
            const listEl = screen.queryAllByRole("listitem");

            expect(listEl).toHaveLength(0)

        })
    })


  
  
  
  })
  


  