import PokemonProvider from "./context/pokemons/Provider";
import './App.css';
import Routes from './routes';

function App() {
  return (
    <PokemonProvider>
      <Routes>
        
      </Routes>
    </PokemonProvider>
  );
}

export default App;
