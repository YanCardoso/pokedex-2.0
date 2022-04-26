import { Container, ContentCard, TypeBox } from "./styles";
import { definitionColor } from "../../styles/colors";
import { jp_name } from "../../styles/jp";
import { PokeTypes } from "../../styles/Poketype";
import { Pokemon } from "../../pages/Dashboard";
import { MotionProps } from "framer-motion";

interface PokeTypeProps {
  pokemon: Pokemon;
}

export function PokeCard({ pokemon, ...props }: PokeTypeProps & MotionProps) {
  return (
    <>
      {pokemon.sprites && (
        <Container
          {...props}
          style={{
            backgroundColor: definitionColor(pokemon.types[0].type.name),
          }}
        >
          <header>
            <h1>{pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}</h1>
            <h2>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
          </header>
          <ContentCard>
            <TypeBox>
              <PokeTypes pokeType={pokemon.types[0].type.name} />
              {pokemon.types.length > 1 && (
                <PokeTypes pokeType={pokemon.types[1].type.name} />
              )}
            </TypeBox>
            <img src={pokemon.sprites} alt={pokemon.name} />
          </ContentCard>
          <h3>{jp_name[pokemon.id]}</h3>
        </Container>
      )}
    </>
  );
}
