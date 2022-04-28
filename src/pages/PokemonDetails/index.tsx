import { Footer } from "../../components/Footer";
import { Container, Content } from "./styles";
import { BiArrowBack } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { PokeTypes } from "../../styles/Poketype";
import { Details } from "../../components/Details";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AvatarPoke } from "../../components/AvatarPoke";
import { SearchContext } from "../../contexts/SearchContext";
import { definitionColor } from "../../styles/colors";
import { api } from "../../services/api";

export function PokemonDetails() {
  const { pokemonDetails } = useContext(SearchContext);

  function createPokemonDetails() {}

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const start = async () => {
      const response = await api.get(`pokemon/${1}`);
      const data = response.data;
      console.log(data);
    };
    start();
  }, []);

  return (
    <Container
      style={{
        backgroundColor: definitionColor(pokemonDetails.types[0].type.name),
      }}
    >
      <Content>
        <header>
          <Link to={`/`}>
            <BiArrowBack size={28} color="white" />
          </Link>
          <FcLike size={28} />
        </header>

        <section className="nameSection">
          <div className="contentName">
            <h1>{pokemonDetails.name}</h1>
            <div className="typeContainer">
              <PokeTypes
                layout
                pokeType={pokemonDetails.types[0].type.name}
                color="white"
              />
              {pokemonDetails.types.length > 1 && (
                <PokeTypes
                  pokeType={pokemonDetails.types[1].type.name}
                  color="white"
                />
              )}
            </div>
          </div>
          <h2>#001</h2>
        </section>

        <section className="imgSection">
          <AvatarPoke className="ImgDetails" src={pokemonDetails.sprites} />
          {/* <img className="ImgDetails"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="bulbasaur"
            /> */}
        </section>

        <Details />
      </Content>
      <Footer />
    </Container>
  );
}
