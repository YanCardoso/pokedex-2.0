import { Data, Pokemon } from "../components/Dashboard"

export function createPokemonObject(data: Data) {
    const newpoke: Pokemon = {
        id: data.id,
        name: data.name,
        types: data.types,
        sprites: data.sprites.other["official-artwork"].front_default,
        stats: data.stats,
    }

    return newpoke
}