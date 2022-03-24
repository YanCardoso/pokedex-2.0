import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { PokeCard } from "../PokeCard";
import { Container, CardGrid } from "./styles";

export interface Pokemon {
    id: number;
    name: string;
    types: Types[];
    sprites: string;
    stats: Stats[]
}

interface Data {
    id: number;
    name: string;
    types: Types[];
    sprites: {
        other: {
            ["official-artwork"]: {
                front_default: string;
            };
        }
    };
    stats: Stats[]
}

interface Types {
    type: {
        name: string;
    }
}

interface Stats {
    base_stat: number;
    stat: {
        name: string;
    }
}

export function Dashboard() {

    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
    const [index, setIndex] = useState(1)
    const [listPokemon, setListPokemon] = useState<Pokemon[]>([])

    function createPokemonObjetc(data: Data) {
        const poke = {
            id: data.id,
            name: data.name,
            types: data.types,
            sprites: data.sprites.other["official-artwork"].front_default,
            stats: data.stats,
        }
        setPokemon(poke);
        createPokemonList(poke);
    }

    function createPokemonList(pokemon: Pokemon) {
        setListPokemon([...listPokemon, pokemon])
        console.log(listPokemon)
        if(index < 10){
            let i = index + 1;
            setIndex(i)
        }
    }


    useEffect(() => {
        const start = async () => {
            const response = await api.get(`pokemon?limit=10&offset=0`).then(response => {
                return response.data
            })
        }
        // start()
    }, [])

    useEffect(() => {
        const start = async () => {
            const response = await api.get(`pokemon/${index}`)
                .then(response => {
                    return response.data
                })
            createPokemonObjetc(response)
        }
        start()
    }, [index])

    return (
        <Container>
            <h1>Pokédex</h1>
            <input type="text" />

            <CardGrid>
                {listPokemon.map(pokemon => {
                    return <PokeCard key={pokemon.id} pokemon={pokemon}/>
                })}
            </CardGrid>

        </Container>
    )
}