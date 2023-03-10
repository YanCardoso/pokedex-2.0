import { createContext, useState } from "react";
import { Data, Pokemon } from "../pages/Dashboard";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { createPokemonObject } from "../utils/createObject";

interface SearchProviderProps {
  children: React.ReactNode;
}

interface SearchType {
  search: string;
  setSearch: (search: string) => void;
  searchPokemon: () => void;
  pokemonSelectDetails: (pokemon: Pokemon) => void;
  pokemonSearch: Pokemon;
  pokemonDetails: Pokemon;
  showContainerButtons: boolean;
}

export const SearchContext = createContext<SearchType>({} as SearchType);

export function SearchProvider(props: SearchProviderProps) {
  const [search, setSearch] = useState("");
  const [pokemonSearch, setPokemonSearch] = useState({} as Pokemon);
  const [showContainerButtons, setShowContainerButtons] = useState(true);
  const [pokemonDetails, setPokemonDetails] = useState({} as Pokemon);

  function pokemonSelectDetails(props: Pokemon) {
    setPokemonDetails(props);
  }

  async function searchPokemon() {
    try {
      if (search === "") {
        setPokemonSearch({} as Pokemon);
        setShowContainerButtons(true);
        return;
      }

      const response = await api
        .get<Data>(`pokemon/${search.toLocaleLowerCase()}`)
        .then((response) => {
          return response.data;
        });
      const pokemonObject = createPokemonObject(response);
      setPokemonSearch(pokemonObject);
      setShowContainerButtons(false);
      setSearch("");
    } catch (error) {
      toast.error("Pokemon not found");
      setPokemonSearch({} as Pokemon);
      setSearch("");
      setShowContainerButtons(true);
    }
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        showContainerButtons,
        setSearch,
        pokemonSelectDetails,
        searchPokemon,
        pokemonDetails,
        pokemonSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
