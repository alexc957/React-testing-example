import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { generateFakeData } from '../data/fakeRepos';
import { getData } from '../data/getData';
import { filterByStars, getLatesUpdatedtRepos } from '../repoOperations';
import { IRepository } from '../IRepository';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/


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

describe("App.tsx", ()=>{
  test("renders the title of the app",()=> {

    render(< App />)
    const titleEl = screen.getByText("Stackbuilders repo list")

    expect(titleEl).toBeInTheDocument()
  });


  test("renders a list of repositories that have more than 5 stars",()=>{
    const filteredaRepos = filterByStars(repos, 5); 
    render(<Repos repos={filteredaRepos}  />)
    const listEl = screen.getAllByTestId("list-item")

    expect(listEl.length).toBe(5)

  })

  test("renders a list of the five latest updated repositories",()=> {
    const filteredaRepos = getLatesUpdatedtRepos(repos); 
    render(<Repos repos={filteredaRepos}  />)

    const listEl = screen.getAllByTestId("list-item")

    expect(listEl.length).toBe(5)
    // the last repo in the array 
    const lastRepo = repos[repos.length -1 ]
    expect(listEl[0].innerText).toBe(lastRepo.name)

  })


  test("renders the sum of the stars of all repositories",()=> {
    render(<Badge repos={repos}/>)

    const sumEl = screen.getByText("54");

    expect(sumEl).toBeInTheDocument();
  })




})





