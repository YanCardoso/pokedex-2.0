import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/Dashboard";
import { SearchProvider } from "./contexts/SearchContext";
import { GlobalStyle } from "./styles/global";
import { PokemonDetails } from './pages/PokemonDetails';
function App() {
  return (
    <SearchProvider>
      {/* <Dashboard /> */}
      <PokemonDetails />
      <ToastContainer />
      <GlobalStyle />
    </SearchProvider>
  );
}

export default App;
