import React from 'react'
import { RepoProps } from '../CustomTypes'
import { IRepository } from '../IRepository'


export default function Repos({repos, title}: RepoProps) {
  return (
    <div>
        <h4>{title}</h4>
        <ul>
            {repos.map((repo, index)=> {
                return <li data-testid="list-item" key={index}>
                    <p>Name: {repo.name}</p>
                    <p>updated at: {repo.updated_at}</p>
                    <p>stars: {repo.stargazers_count}</p>
                </li>
            })}
        </ul>
    </div>
  )
}
