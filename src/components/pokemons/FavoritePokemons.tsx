import type { FavoritePokemon } from "@interfaces/favoritePokemon";
import { createSignal, For, type Component } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem("favorites") ?? "[]"
  ) as FavoritePokemon[];

  return favoritePokemons;
};

interface FavoritePokemonsProps {}
export const FavoritePokemons: Component<FavoritePokemonsProps> = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
};
