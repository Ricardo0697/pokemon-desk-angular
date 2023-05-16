import {Component , OnInit} from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { Pokemon } from 'src/app/model/pokemon.model';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonName: string;
  pokemon: any;
  error:any;
  loading:boolean = true;
  constructor(private pokemonService: PokemonService) { 
    this.pokemonName = '';
  }
  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemon(this.pokemonName).subscribe(
        (response) => {
          this.pokemon = response;
        },
        (error) => {
          console.log('An error occurred:', error);
        }
      );
    } else {
      console.log('Please enter a Pokemon name.');
    }
  }
}
