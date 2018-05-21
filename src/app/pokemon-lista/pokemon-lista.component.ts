import { Component, OnInit } from '@angular/core';
import { AppPokemonService } from '../app-pokemon.service';
import { Pokemon } from '../pokemon';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.css']
})
export class PokemonListaComponent implements OnInit {

   /**
   * The component maintains
   * a list of Pokemon objects
   * that will be rendered.
   *
   * We initialize it to an empty
   * list.
   */
  pokemon: Pokemon[] = [];
  nextPrevious:any;
  /**
   * A boolean that represents
   * if we are currently loading data.
   */
  isLoading: boolean = false;

  /**
   * This boolean will be set
   * to true if an error occurred.
   */
  error: boolean = false;

  /**
   * Inject the Pokedex service.
   */
  constructor(private pokemonService: AppPokemonService, private http: Http, private route: ActivatedRoute, private router: Router, private httpClient: HttpClient ) { }

  /**
   * A lifecycle method
   * that is automatically
   * envoked when the component
   * is created.
   */
  ngOnInit() {
    /**
     * Load the initial data.
     */
    this.carregarPokemons(); 
    this.getNextPrevious()
  }

  carregarPokemons() {
    this.isLoading = true;

    /**
     * Use the Pokemon service
     * to load the next 12 Pokemon.
     */
    this.pokemonService.getAllPokemons(this.pokemon.length, 12)
      .then(pokemon => {
        pokemon = pokemon.map(p => {
          p.imageLoaded = false;
          console.log(p)
          console.log(p.id)
          console.log(p.name)
          console.log(p.url)
          return p;
        });               
        this.pokemon = this.pokemon.concat(pokemon);
        this.isLoading = false;
        this.error = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  }

  getNextPrevious() {

    const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
    this.httpClient.get(baseUrl).subscribe(data => {
      this.nextPrevious = data;
      console.log(this.nextPrevious);
    });

  }

}





