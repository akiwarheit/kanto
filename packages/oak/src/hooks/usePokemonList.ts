import { useEffect, useState } from 'react'

export default function usePokemonList() {
  const [pokemons, setPokemons] = useState([])

  const [error, setError] = useState(undefined)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=300')
      .then((response) => response.json())
      .then(async (json) => {
        const pokemons = await Promise.all(
          json.results.map((item: any) =>
            fetch(item.url)
              .then((response) => response.json())
              .catch(console.error)
          )
        )
        const transformedMons = pokemons.map((pokemon: any, idx: number) => ({
          id: idx,
          name: pokemon.name,
          sprite: pokemon.sprites.front_default,
          types: pokemon.types.map((type: any) => type.type.name)
        })) as any
        setPokemons(transformedMons)
      })
      .catch(setError)
  }, [setPokemons])

  return { error, pokemons }
}
