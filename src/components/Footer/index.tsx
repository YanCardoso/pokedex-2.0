import {Container} from './style'
import bg from "../../assets/container_bg.png"

export function Footer() {
    return (
        <Container style={{
            backgroundImage: `url(${bg})`
        }}>
            <span>
                Criado por @yancs_
            </span>
        </Container>
    )
}