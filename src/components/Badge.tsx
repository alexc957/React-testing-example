import React from 'react'
import { BadgeProps } from '../CustomTypes'

export default function Badge({value}: BadgeProps) {


  return (
    <div>
        <p>The sum of all repositories stars</p>
        <h3>
            {value}
        </h3>
    </div>
  )
}
