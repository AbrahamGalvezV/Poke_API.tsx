import type { Pokemon } from "../types/pokemon.interface";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
const MAX_POKEMON_COUNT = 151;

const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPokemon = async (): Promise<Pokemon> => {

  const randomId = getRandomIntInclusive(1, MAX_POKEMON_COUNT);

  const response = await fetch(
    `${POKEMON_API_URL}/${randomId}`
  );

  if (!response.ok) {
    throw new Error(
      `Error fetching Pokémon with ID ${randomId}`
    );
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image:
      data.sprites.other["official-artwork"]
        .front_default,
  };
};

export const pokemonService = {
  getRandomPokemon,
};


