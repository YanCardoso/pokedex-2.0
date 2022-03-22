import { Container, ContentCard, TextBox } from "./styles";
import bulbaImg from "../../assets/bulbasaur.png"

export function PokeCard() {
    return (
        <Container>
            <header>
                <h2>#001</h2>
            </header>

            <ContentCard>
                <TextBox>
                    <h1>Bulbasaur</h1>
                    <span>Grass</span>
                    <span>Poison</span>
                </TextBox>
            </ContentCard>
            <img src={bulbaImg} alt="Bulba" />

        </Container>
    )
}