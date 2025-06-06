import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  restaurants$!: Observable<Restaurant[]>;
  isLoading = true;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurants$ = this.restaurantService.getRestaurants();
    this.restaurants$.subscribe({
      next: () => this.isLoading = false,
      error: () => this.isLoading = false
    });
  }
}