import { createContext, useState } from 'react'
import { Data, Pokemon } from '../components/Dashboard';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { createPokemonObject } from '../utils/createObject';

interface SearchProviderProps {
    children: React.ReactNode;
}

interface SearchType {
    search: string;
    setSearch: (search: string) => void;
    searchPokemon: () => void;
    pokemonSearch: Pokemon;
}


export const SearchContext = createContext<SearchType>({} as SearchType);

export function SearchProvider(props: SearchProviderProps) {
    const [search, setSearch] = useState('');
    const [pokemonSearch, setPokemonSearch] = useState({} as Pokemon);

    async function searchPokemon() {
        try {

            if(search === ''){
                setPokemonSearch({} as Pokemon)
                return
            }

            const response = await api.get<Data>(`pokemon/${search.toLocaleLowerCase()}`)
                .then(response => {
                    return response.data
                })
            const pokemonObject = createPokemonObject(response)
            setPokemonSearch(pokemonObject)
            setSearch('')
        } catch (error) {
            toast.error('Pokemon not found')
            setPokemonSearch({} as Pokemon)
            setSearch('')
        }
    }

    return (
        <SearchContext.Provider value={{ search, setSearch, searchPokemon, pokemonSearch }}>
            {props.children}
        </SearchContext.Provider>
    )

}