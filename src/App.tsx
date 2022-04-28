import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SearchProvider } from "./contexts/SearchContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes />
        <ToastContainer />
        <GlobalStyle />
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
