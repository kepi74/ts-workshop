import React from 'react'
import { Age } from './Age'

interface Props {
  user: {
    name: string
    age: number
  }
}

export const User = ({ user }: Props) => (
  <Age age={user.age} />
)
