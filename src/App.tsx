import { Dashboard } from "./components/Dashboard";
import { SearchProvider } from "./Contexts/SearchContext";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <SearchProvider>
      <Dashboard />
      <GlobalStyle />
    </SearchProvider>
  );
}

export default App;
