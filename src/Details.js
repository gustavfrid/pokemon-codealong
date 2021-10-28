import React, { useState, useEffect } from 'react'

export const Details = props => {
  const [details, setDetails] = useState()

  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(data => {
        console.log(props.url)
        console.log(data)
        setDetails(data)
      })
  }, [props])

  return (
    <div>
      <h1>{props.name}</h1>
      {details && <img src={details.sprites.front_default} alt='pokemon' />}
    </div>
  )
}
