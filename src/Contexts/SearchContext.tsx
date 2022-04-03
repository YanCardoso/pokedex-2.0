import { createContext, useState } from 'react'

interface SearchProviderProps {
    children: React.ReactNode;
}

interface SearchType {
    search: string;
    setSearch: (search: string) => void;
}


export const SearchContext = createContext<SearchType>({} as SearchType);

export function SearchProvider(props: SearchProviderProps){
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {props.children}
        </SearchContext.Provider>
    )
    
}