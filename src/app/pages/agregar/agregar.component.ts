import { Component } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  newRestaurant: Restaurant = {
    name: '',
    description: '',
    address: '',
    image: ''
  };

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  async addRestaurant(): Promise<void> {
    if (this.isValid()) {
      try {
        await this.restaurantService.addRestaurant(this.newRestaurant);
        this.router.navigate(['/']);
      } catch (error) {
        console.error('Error al agregar restaurante:', error);
      }
    }
  }

  private isValid(): boolean {
    return !!this.newRestaurant.name && 
           !!this.newRestaurant.description && 
           !!this.newRestaurant.address && 
           !!this.newRestaurant.image;
  }
}