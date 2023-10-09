export interface PokemonDetail {
    id: string,
    name: string,
    types: Type[],
    weight: string;
    height: string;
    sprites: Sprites;
    moves: Move[];

}

interface Type {
    type: GenericItem;
}

interface Move {
    move: GenericItem;
}

interface GenericItem {
    name: string;
    url: string;
}

interface Sprites {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}