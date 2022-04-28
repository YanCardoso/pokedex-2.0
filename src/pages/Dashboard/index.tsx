import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { api } from "../../services/api";
import { createPokemonObject } from "../../utils/createObject";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PokeCard } from "../../components/PokeCard";
import { Container, CardGrid, Content, ContainerButtonScroll } from "./styles";
import arrowUp from "../../assets/icons8-seta-para-cima-48.png";
import { useNavigate } from "react-router-dom";

export interface Pokemon {
  id: number;
  name: string;
  types: Types[];
  sprites: string;
  stats: Stats[];
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
    };
  };
  stats: Stats[];
}

interface Types {
  type: {
    name: string;
  };
}

interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Dashboard() {
  const { pokemonSearch, showContainerButtons } = useContext(SearchContext);
  const navigate = useNavigate()

  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [maxPokeList, setMaxPokeList] = useState(9);
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);

  function createPokemonList(data: Data) {
    const newPoke = createPokemonObject(data);
    maxListPokemon(newPoke);
  }

  function maxListPokemon(newpoke: Pokemon) {
    if (index <= maxPokeList) {
      setListPokemon([...listPokemon, newpoke]);
      setIndex(index + 1);
    } else {
      setIsLoading(false);
    }
  }

  function selectCard(pokemon: Pokemon) {
    navigate(`${pokemon.id}`)
  }

  useEffect(() => {
    const start = async () => {
      const response = await api.get(`pokemon/${index}`);
      const data = response.data;
      createPokemonList(data);
    };
    start();
  }, [index, maxPokeList]);

  return (
    <Container>
      <Content>
        <Header />
        <CardGrid variants={container} initial="hidden" animate="visible">
          {!pokemonSearch.id ? (
            listPokemon.map((pokemon) => {
              return (
                <PokeCard
                  onClick={() => selectCard(pokemon)}
                  variants={item}
                  key={pokemon.id}
                  pokemon={pokemon}
                />
              );
            })
          ) : (
            <PokeCard
              key={pokemonSearch.id}
              pokemon={pokemonSearch}
              variants={item}
            />
          )}
        </CardGrid>
      </Content>
      {showContainerButtons && (
        <div className="button-container">
          <Button
            whileTap={{ scale: 1.2 }}
            onClick={() => {
              const i = maxPokeList;
              setMaxPokeList(i + 9);
            }}
          />
          <ContainerButtonScroll
            animate={{
              y: [0, -10, 2, -2, 0],
            }}
            transition={{
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={arrowUp} alt="Arrow Up" />
          </ContainerButtonScroll>
        </div>
      )}

      <Footer />
    </Container>
  );
}

{
  /* <div
  style={{
    borderBottom: "5px solid green",
    width: `calc(${index / maxPokeList} * 100%)`,
  }}
>
  Loading...
</div>; */
}
