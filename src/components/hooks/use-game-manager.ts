import { useCallback, useEffect, useState } from "react";
import type { Pokemon } from "../types/pokemon.interface";
import { pokemonService } from "../services/pokemon.service";

export const useGameManager = () => {
    const [ pokemon, setPokemon ] = useState<Pokemon | null>(null);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);

    const loadNewPokemon = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const randomPokemon = await pokemonService.getRandomPokemon();
            setPokemon(randomPokemon);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadNewPokemon();
    }, [loadNewPokemon])

    return {
        pokemon,
        isLoading,
        error,
        loadNewPokemon,
    };
}