import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [
    CommonModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  restaurants: Restaurant[] = [];
  isLoading = true;

  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurants = this.restaurantService.getRestaurants();
    this.isLoading = false;
  }

}
