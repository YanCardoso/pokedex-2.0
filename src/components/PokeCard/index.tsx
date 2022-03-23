import { Container, ContentCard, TextBox } from "./styles";
import { Pokemon } from "../Dashboard";




export function PokeCard({ pokemonObj }: { pokemonObj: Pokemon }) {
    return (
        <Container>
            <header>
                <h1>{`#0${pokemonObj.id}`}</h1>
            </header>
            <ContentCard>
                <TextBox>
                    <h2>{pokemonObj.name}</h2>
                    <span>Grass</span>
                    <span>Poison</span>
                    <h3>フシギダネ</h3>
                </TextBox>
            </ContentCard>
            <img src={pokemonObj.sprites} alt="Bulba" />

        </Container>
    )
}