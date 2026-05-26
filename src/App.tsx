import { useGameManager } from "./components/hooks/use-game-manager";
import PokemonDisplay from "./components/PokemonDisplay";
import PokemonForm from "./components/PokemonForm";
import PokemonResults from "./components/PokemonResults";


const App = () => {
  const { loadNewPokemon, pokemon, error, isLoading, gameState, handlePokemonNameSubmit } = useGameManager();

  if (isLoading) {
    return <div className="text-center">Cargando pokémon...</div>
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>
  }


  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 ">
          <PokemonDisplay 
            pokemon={pokemon}
            isLoading={isLoading}
            gameState={gameState}
           />
          <PokemonForm 
            gameState={gameState}
            handlePokemonNameSubmit={handlePokemonNameSubmit}
          />
          <PokemonResults 
            loadNewPokemon={loadNewPokemon} 
            gameState={gameState}
          />      
        </div>
      </div>
    </div>
  )
}

export default App