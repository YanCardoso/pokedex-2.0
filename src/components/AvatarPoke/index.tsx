import { MotionProps } from "framer-motion";
import { ImgHTMLAttributes } from "react";
import { Img } from "./styles";

interface AvatarPokeProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function AvatarPoke({
  src,
  alt,
  ...props
}: AvatarPokeProps & MotionProps) {
  return <Img src={src} alt={alt} {...props} />;
}
