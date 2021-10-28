import React, { useState, useEffect } from 'react'
import { Details } from 'Details'

export const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState()
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => setPokemons(data.results))
  }, [])
  return (
    <div>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
          </li>
        ))}
      </ul>
      {selectedPokemon && <Details name={selectedPokemon.name} url={selectedPokemon.url} />}
    </div>
  )
}
