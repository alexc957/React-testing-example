import React from 'react'
import { RepoProps } from '../CustomTypes'
import { IRepository } from '../IRepository'
import Card from './Card'


export default function Repos({repos, title}: RepoProps) {
  return (
    <div>
        <h4>{title}</h4>
        <ul className='repos'>
            {repos.map((repo, index)=> {
                return <Card repo={repo}  key={index}/>
            })}
        </ul>
    </div>
  )
}
