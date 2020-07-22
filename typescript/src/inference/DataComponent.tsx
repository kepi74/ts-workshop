import React from 'react'
import { User } from './User'

interface DummyFetchedData {
  user: {
    name: string
    age: number
  }
  articlesCount: number
}

const dummyFetchedData: DummyFetchedData = {
  user: {
    name: 'Hugo',
    age: 13,
  },
  articlesCount: 22
}


export const DataComponent = () => (
  <User user={dummyFetchedData.user} />
)
