import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IRepository } from "./IRepository";
import { getData } from "./data/getData";
import Repos from "./components/Repos";
import {
  filterByStars,
  getLatesUpdatedtRepos,
  sumOfStars,
} from "./repoOperations";
import Badge from "./components/Badge";

function App() {
  const [repos, setRepos] = useState<IRepository[]>([]);

  const [reposByNumStars, setReposByNumStars] = useState<IRepository[]>([]);
  const [latestUpdatedRepos, setLatestUpdatedRepos] = useState<IRepository[]>(
    []
  );
  const [starsSum, setStarsSum] = useState<number>(0);

  useEffect(() => {
    const fetchInitialRender = async () => {
      try {
        const data = await getData("/orgs/stackbuilders/repos");
        setRepos(data);
      } catch (e) {}
    };

    fetchInitialRender();
  }, []);

  useEffect(() => {
    setLatestUpdatedRepos(getLatesUpdatedtRepos(repos));
    setReposByNumStars(filterByStars(repos));
    setStarsSum(sumOfStars(repos));
  }, [repos]);
  return (
    <div className="App">
      <h1>Stackbuilders repo list</h1>
      <div className="container">
        <Repos
          repos={reposByNumStars}
          title="Repositories with more than 5 stars "
        />
        <Repos
          repos={latestUpdatedRepos}
          title="Last 5 updated repositories  "
        />
        <Badge value={starsSum} />
      </div>
    </div>
  );
}

export default App;
