import { GameState } from "./hooks/use-game-manager";

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}

const PokemonResults = ({ loadNewPokemon, gameState }: Props) => {
  if (gameState === GameState.Playing) {
    return null;
  }

  return (
    <div
      className={`alert alert-${
        gameState === GameState.Correct ? "success" : "danger"
      } text-center`}
    >
      {gameState === GameState.Correct ? (
        <h2>¡Correcto!</h2>
      ) : (
        <h2>¡Incorrecto!</h2>
      )}
      <button className="btn btn-dark mt-3" onClick={loadNewPokemon}>
        Volver a intentar
      </button>
    </div>
  );
};
export default PokemonResults;
