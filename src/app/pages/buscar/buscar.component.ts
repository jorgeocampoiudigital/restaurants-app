import { Component } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

  searchTerm = '';
  results: Restaurant[] = [];
  allRestaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {
    this.allRestaurants = this.restaurantService.getRestaurants();
    this.results = [...this.allRestaurants];
  }

  search(): void {
    this.results = this.searchTerm 
      ? this.restaurantService.searchRestaurants(this.searchTerm)
      : [...this.allRestaurants];
  }

}
