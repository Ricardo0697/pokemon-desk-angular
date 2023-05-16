export interface Pokemon {
    name: string;
    type: string;
    abilities: string[];
    stats: {
      hp: number;
      attack: number;
      defense: number;
      // ...
    };
    imageUrl: string; // Agrega la propiedad 'imageUrl' al modelo Pokemon
  }