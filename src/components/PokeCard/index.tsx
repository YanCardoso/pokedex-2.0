import { Container, ContentCard, TextBox } from "./styles";
import { Pokemon } from "../Dashboard";
import { definitionColor } from "../../styles/colors";



export function PokeCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <>
            {pokemon.types !== undefined ? (
                <Container style={{
                    backgroundColor: definitionColor(pokemon.types[0].type.name)
                }}>
                    <header>
                        <h1>{`#0${pokemon.id}`}</h1>
                    </header>
                    <ContentCard>
                        <TextBox>
                            <h2>{pokemon.name}</h2>
                            {<span>{pokemon.types[0].type.name}</span>}
                            {pokemon.types.length > 1 &&
                                <span>{pokemon.types[1].type.name}</span>
                            }
                            <h3>フシギダネ</h3>
                        </TextBox>
                    </ContentCard>
                    <img src={pokemon.sprites} alt={pokemon.name} />
                </Container>
            )
                : (
                    <div>LOADING...</div>
                )}
        </>
    )


}

