import { PokemonCard } from 'src/app/models/pokemon-card.model';
import { PaginationPipe } from './pagination.pipe';

const pokemons: PokemonCard[] = [
  {
    "id": "1",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "name": "bulbasaur"
  },
  {
    "id": "2",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "name": "ivysaur"
  },
  {
    "id": "3",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "name": "venusaur"
  },
  {
    "id": "4",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "name": "charmander"
  },
  {
    "id": "5",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "name": "charmeleon"
  },
  {
    "id": "6",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "name": "charizard"
  },
  {
    "id": "7",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "name": "squirtle"
  },
  {
    "id": "8",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "name": "wartortle"
  },
  {
    "id": "9",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "name": "blastoise"
  },
  {
    "id": "10",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "name": "caterpie"
  }
]

describe('PaginationPipe', () => {
  let pipe = new PaginationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 5 objects if offset equals to 5', () => {
    const result = pipe.transform(pokemons, 0, 5)
    expect(result.length).toBe(5);
  });

  it('should filter pokemons by search params', () => {
    const result = pipe.transform(pokemons, 0, 5, "bulbasaur")
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("bulbasaur");
    expect(result[0].id).toBe('1');
  });

  it('should take default values for page and offset when not provided', () => {
    const result = pipe.transform(pokemons)

    expect(result.length).toBe(10);
  });

});
