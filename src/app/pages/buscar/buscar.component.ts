import { Component } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  searchTerm = '';
  results$: Observable<Restaurant[]> | null = null;

  constructor(private restaurantService: RestaurantService) {}

  search(): void {
    this.results$ = this.restaurantService.searchRestaurants(this.searchTerm);
  }
}