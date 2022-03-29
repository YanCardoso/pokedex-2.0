
import { Container } from "./styles";
import pokeSearchImg from "../../assets/poke_symbol.png";

export function Header() {
    return (
        <Container>
            <h1>Pokédex</h1>
            <div className="searchBox">
                <input type="text" />
                <button type="button"><img src={pokeSearchImg} alt="Search"></img></button>
            </div>
        </Container>
    )
}