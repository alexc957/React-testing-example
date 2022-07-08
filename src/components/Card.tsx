
import React from 'react'
import { IRepository } from '../IRepository'


interface CardProps {
    repo: IRepository
}

export default function Card({ repo }: CardProps) {
  return (
    <li className="card">

        <p>{repo.name}</p>
        <p>updated at: {repo.updated_at}</p>
        <p>stars: {repo.stargazers_count}</p>
    </li>
  )
}
