import { Dashboard } from "../pages/Dashboard";
import { Routes as RTes, Route } from "react-router-dom";
import { PokemonDetails } from "../pages/PokemonDetails";

export const Routes = () => {
  return (
      <RTes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:id" element={<PokemonDetails />} />
      </RTes>
  );
};
