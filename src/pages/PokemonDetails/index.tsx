import { Footer } from "../../components/Footer";
import { Container, Content } from "./styles";
import { BiArrowBack } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { PokeTypes } from "../../styles/Poketype";
import { Details } from "../../components/Details";

export function PokemonDetails() {
  return (
    <>
      <Container>
        <Content>
          <header>
            <BiArrowBack size={28} color="white" />
            <FcLike size={28} />
          </header>

          <section className="nameSection">
            <div className="contentName">
              <h1>bulbasaur</h1>
              <div className="typeContainer">
                <PokeTypes pokeType="grass" color="white" />
                <PokeTypes pokeType="poison" color="white" />
              </div>
            </div>
            <h2>#001</h2>
          </section>

          <section className="imgSection">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="bulbasaur"
            />
          </section>

          <Details />
        </Content>
        <Footer />
      </Container>
    </>
  );
}
