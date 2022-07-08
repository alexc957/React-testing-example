import React from 'react';
import { render, screen } from '@testing-library/react';

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




describe("Badge.tsx", () => {



  describe("when the repos is a not an empty array",()=>{
    it("renders the sum of the stars of all repositories",()=> {


      const sum = sumOfStars(repos);
  
      render(<Badge value={sum}/>)
  
      const sumEl = screen.getByText("54");
  
      expect(sumEl).toBeInTheDocument();
    });
  })


  describe("when passing a harcoded value to the component",()=>{
    it("renders a harcoded value",()=>{
      const harcodedValue = 3333;
      render(<Badge value={harcodedValue} />);
      expect(screen.getByText(`${harcodedValue}`)).toBeInTheDocument();
    })
  })
 

  describe("when passing a empty array to the sumOfStars function", ()=> {
    it("renders a value of 0 when computing the sum of stars of a empty array",()=>{
      const sum = sumOfStars([]);
  
      render(<Badge value={sum}/>)
  
      const sumEl = screen.getByText("0");
  
      expect(sumEl).toBeInTheDocument();
  
  
    })   
  })
 

} )





