import { log } from "console";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { PokeCard } from "../PokeCard";
import { Container, CardGrid } from "./styles";

export interface Pokemon {
    id: number;
    name: string;
    types: Object[];
    sprites: string;
    stats: Object[]
}

interface Data {
    id: number;
    name: string;
    types: Object[];
    sprites: {
        other: {
            ["official-artwork"]: {
                front_default: string;
            };
        }
    };
    stats: Object[]
}

export function Dashboard() {

    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

    function createPokemonObjetc(data: Data) {
        const poke = {
            id: data.id,
            name: data.name,
            types: data.types,
            sprites: data.sprites.other["official-artwork"].front_default,
            stats: data.stats,
        }
        setPokemon(poke);        
    }

    useEffect(() => {
        api.get('pokemon/100')
            .then(response => {
                createPokemonObjetc(response.data)
            })

    }, [])

    return (
        <Container>
            <h1>Pokédex</h1>
            <input type="text" />

            <CardGrid>
                <PokeCard key={pokemon.id} pokemonObj={pokemon} />
            </CardGrid>


        </Container>
    )
}