import type { FavoritePokemon } from "@interfaces/favoritePokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const { pokemon } = props;

  const [isVisible, setIsVisible] = createSignal<boolean>(true);
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = (id: number) => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    ) as FavoritePokemon[];
    const newFavorites = favorites.filter((pokemon) => pokemon.id !== id);
    setIsVisible(false);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imgSrc}
            alt={pokemon.name}
            class="w-96 h-96"
          />

          <p class="capitalize">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>

        <button
          class="p-4 bg-red-500 text-white rounded-2xl "
          onclick={() => deleteFavorite(pokemon.id)}
        >
          Borrar
        </button>
      </div>
    </Show>
  );
};
