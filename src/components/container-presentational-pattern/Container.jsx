import React, { useEffect, useState } from 'react'

import Presentational from './Presentational'
import useFetch from '../hooks/useFetch'

export default function Container() {
  const [results, setResults] = useState([])
  const {
    loading,
    data: users,
    error
  } = useFetch('http://localhost:3000/data.json')

  let searchTimer
  const handleSearchQuery = evt => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
      const query = evt.target.value.toLowerCase()
      setResults(
        users.filter(
          (ele, index, arr) =>
            ele.first_name.toLowerCase().includes(query) ||
            ele.last_name.toLowerCase().includes(query)
        )
      )
    }, 2000)
  }
  if (loading) return <p>Loading...</p>
  if (error) return <p>Sorry try again</p>

  return (
    <Presentational
      results={results}
      handleSearch={handleSearchQuery}
      resultProp={'first_name'}
    />
  )
}
