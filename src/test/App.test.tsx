import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { generateFakeData } from '../data/fakeRepos';
import { getData } from '../data/getData';
import { filterByStars, getLatesUpdatedtRepos, sumOfStars } from '../repoOperations';
import { IRepository } from '../IRepository';
import Badge from '../components/Badge';
import Repos from '../components/Repos';

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
 


  test("renders a list of repositories that have more than 5 stars",()=>{
    const filteredaRepos = filterByStars(repos, 5); 
    render(<Repos repos={filteredaRepos} title="Repositories with more than 5 stars "  />)
    const listEl = screen.getAllByTestId("list-item")

    expect(listEl.length).toBe(5)

  })

  test("renders a list of the five latest updated repositories",()=> {
    const filteredaRepos = getLatesUpdatedtRepos(repos); 
    render(<Repos repos={filteredaRepos} title="Last 5 updated repositories  "  />)

    const listEl = screen.getAllByTestId("list-item")

    expect(listEl.length).toBe(5)
    // the last repo in the array 
    const lastRepo = repos[repos.length -1 ];
    //console.log("innert test",listEl[0].)
    //expect(listEl[0].children).toBe(lastRepo.name)
    expect(screen.getByText(lastRepo.name)).toBeInTheDocument()
  })



})


describe("Badge.tsx", () => {

  test("renders the sum of the stars of all repositories",()=> {


    const sum = sumOfStars(repos);

    render(<Badge value={sum}/>)

    const sumEl = screen.getByText("54");

    expect(sumEl).toBeInTheDocument();
  });


  test("renders a harcoded value",()=>{
    const harcodedValue = 3333;
    render(<Badge value={harcodedValue} />);
    expect(screen.getByText(`${harcodedValue}`)).toBeInTheDocument();
  })

} )





