import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';


import { AppComponent } from './app.component';
import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';

import { AppPokemonService } from './app-pokemon.service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { CapitalizePipe } from './capitalize.pipe';


const appRoutes: Routes = [
  {
    path: 'pokemons',
    component: PokemonListaComponent,
    data: { title: 'Lista de Pokemons' }
  },
  {
    path: 'pokemon-detalhe/:id',
    component: PokemonDetalheComponent,
    data: { title: 'Detalhes do Pokemon' }
  },
  { path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PokemonListaComponent,
    PokemonDetalheComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    
  ],
  providers: [AppPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
