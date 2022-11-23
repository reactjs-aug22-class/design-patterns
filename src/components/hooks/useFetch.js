import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  // fetch use data
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setError(false)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setData([])
        setError(true)
        setLoading(false)
      })
  }, [])

  return { loading, data, error }
}
