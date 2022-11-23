import React from 'react'

export default function Presentational({ results, handleSearch, resultProp }) {
  return (
    <div style={{ width: '50%' }}>
      <h1>Search Users</h1>
      <form>
        <label htmlFor="search">Search: </label>
        <input id="search" onChange={handleSearch} />
      </form>
      <ul>
        {results.map(result => (
          <li>{result[resultProp]}</li>
        ))}
      </ul>
    </div>
  )
}
