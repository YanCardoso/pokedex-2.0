import { Container, ContentCard, TextBox } from "./styles";
import { Pokemon } from "../Dashboard";
import { definitionColor } from "../../styles/colors";
import { jp_name } from "../../styles/jp";



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
                            {<span
                                style={{
                                    backgroundColor: definitionColor(pokemon.types[0].type.name)
                                }}
                            >{pokemon.types[0].type.name}</span>}
                            {pokemon.types.length > 1 &&
                                <span
                                    style={{
                                        backgroundColor: definitionColor(pokemon.types[1].type.name)
                                    }}
                                >{pokemon.types[1].type.name}</span>
                            }
                        </TextBox>
                    </ContentCard>
                    <img src={pokemon.sprites} alt={pokemon.name} />
                    <h3>{jp_name[pokemon.id]}</h3>
                </Container>
            )
                : (
                    <div>LOADING...</div>
                )}
        </>
    )


}

