import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { api } from "../../services/api";
import { createPokemonObject } from "../../utils/createObject";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { PokeCard } from "../PokeCard";
import { Container, CardGrid, Content } from "./styles";

export interface Pokemon {
    id: number;
    name: string;
    types: Types[];
    sprites: string;
    stats: Stats[]
}

export interface Data {
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

const container = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.8
        }
    }
};

const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export function Dashboard() {

    const { pokemonSearch } = useContext(SearchContext);

    const [index, setIndex] = useState(1)
    const [listPokemon, setListPokemon] = useState<Pokemon[]>([])


    function createPokemonList(data: Data) {
        const newPoke = createPokemonObject(data)

        if (index <= 9) {
            setListPokemon([...listPokemon, newPoke])
            setIndex(index + 1)
        }
    }

    useEffect(() => {
        const start = async () => {
            const response = await api.get(`pokemon/${index}`)
            const data = response.data
            createPokemonList(data)
        }
        start()
    }, [index])

    return (
        <Container>
            <Content>
                <Header />
                <CardGrid variants={container} initial="hidden" animate="visible">
                    {!pokemonSearch.id ?
                        listPokemon.map(pokemon => {
                            return <PokeCard variants={item} key={pokemon.id} pokemon={pokemon}
                            />
                        }) :
                        <PokeCard key={pokemonSearch.id} pokemon={pokemonSearch}
                            variants={item}
                        />
                    }
                </CardGrid>
            </Content>
            <Footer />
        </Container>
        
    )
}