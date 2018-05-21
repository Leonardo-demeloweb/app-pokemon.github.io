import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class AppPokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  pokemon:any;
  response:any;
  /**
   * Inject the HTTP service.
   */
  constructor(private http: Http) { }

  /**
   * Method that fetches data from
   * the Pokémon API.
   */

 
  getAllPokemons(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      /**
       * The `get()` method returns
       * an Observable but I convert
       * it into a Promise.
       */
      .toPromise()
      .then(response => response.json().results)
      .then(items => items.map((item, idx) => {
        /**
         * Maping the json object promise results to
         * achieve the values expected to fill
         *  the template with the basic informations
         * without other request
         **/
        const id: number = idx + offset + 1;
        return {
          name: item.name,
          url: item.url,
          sprite: `${this.baseSpriteUrl}${id}.png`,
          id,
        };
      }
    ));
  }

}
