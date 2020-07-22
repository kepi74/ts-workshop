import React from 'react'

interface Props {
  age: number
}

export const Age = ({ age }: Props) => (
  <div>{age}</div>
)
