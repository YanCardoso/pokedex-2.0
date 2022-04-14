import { Container } from "./styles";
import pokes from "../../assets/pokeball_gray.png"
import { MotionProps } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button(props: ButtonProps & MotionProps) {  
  return (
  <Container {...props}>
    <img src={pokes} alt={pokes} />
  </Container>)
}
