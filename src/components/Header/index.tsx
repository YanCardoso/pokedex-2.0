
import { Container } from "./styles";
import pokeSearchImg from "../../assets/poke_symbol.png";
import { useContext, useState } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
export function Header() {

    const {setSearch} = useContext(SearchContext)
    const [input, setInput] = useState('')


    function handleSearch() {
        setSearch(input);
        setInput('');
    }
    
    return (
        <Container>
            <h1>Pokédex</h1>
            <div className="searchBox">
                <input 
                    type="text"
                    placeholder="Digite o nome ou seu número do Pokémon"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoComplete="off"
                />
                <button 
                    type="button"
                    onClick={handleSearch}
                ><img src={pokeSearchImg} alt="Search"></img></button>
            </div>
        </Container>
    )
}