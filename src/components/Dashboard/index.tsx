import { PokeCard } from "../PokeCard";
import { Container, CardGrid } from "./styles";

export function Dashboard() {
    return(
        <Container>
            <h1>Pokédex</h1>
            <input type="text" />

            <CardGrid>
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
            </CardGrid>


        </Container>
    )
}