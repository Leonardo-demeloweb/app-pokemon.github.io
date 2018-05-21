import { Component, OnInit } from '@angular/core';
import { AppPokemonService } from '../app-pokemon.service';

import { HttpClient } from '@angular/common/http';


import { Pokemon } from '../pokemon';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.css']
})
export class PokemonDetalheComponent implements OnInit {
pokemon:any = [];

  constructor(private pokemonService: AppPokemonService, private route: ActivatedRoute, private router: Router, private http: HttpClient ) { }

  ngOnInit() {
    this.getPokemonIndividual(this.route.snapshot.params['id']);

  }

  getPokemonIndividual(id) {

    const baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
    this.http.get<any>(baseUrl+id).subscribe(data => {
      this.pokemon = data;
      console.log(id);
      console.log(this.pokemon);
      console.log(this.pokemon.name);
      console.log(this.pokemon.abilities);
      console.log(this.pokemon.stats);
      console.log(this.pokemon.sprites.front_default);
    });

  }


}
