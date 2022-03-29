import { Container, ContentCard, TypeBox } from "./styles";
import { Pokemon } from "../Dashboard";
import { definitionColor } from "../../styles/colors";
import { jp_name } from "../../styles/jp";
import { PokeTypes } from "../../styles/Poketype";


export function PokeCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <>
            {pokemon.types !== undefined ? (
                <Container style={{
                    backgroundColor: definitionColor(pokemon.types[0].type.name)
                }}>
                    <header>
                        <h1>{`#0${pokemon.id}`}</h1>
                        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                    </header>
                    <ContentCard>
                        <TypeBox>
                            <PokeTypes pokeType={pokemon.types[0].type.name}/>
                            { pokemon.types.length > 1 && 
                                <PokeTypes pokeType={pokemon.types[1].type.name}/>
                             }
                        </TypeBox>
                        <img src={pokemon.sprites} alt={pokemon.name} />
                    </ContentCard>
                    <h3>{jp_name[pokemon.id]}</h3>
                </Container>
            )
                : (
                    <div>LOADING...</div>
                )}
        </>
    )


}

