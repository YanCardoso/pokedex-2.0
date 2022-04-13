import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./components/Dashboard";
import { SearchProvider } from "./contexts/SearchContext";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <SearchProvider>
      <Dashboard />
      <ToastContainer />
      <GlobalStyle />
    </SearchProvider>
  );
}

export default App;
