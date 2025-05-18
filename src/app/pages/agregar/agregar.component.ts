import { Component } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
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
  ) { }

  addRestaurant(): void {
    if (this.isValid()) {
      this.restaurantService.addRestaurant(this.newRestaurant);
      alert(`Restaurante "${this.newRestaurant.name}" creado exitosamente!`);
      this.router.navigate(['/']);
    }
  }

  private isValid(): boolean {
    return !!this.newRestaurant.name && 
           !!this.newRestaurant.description && 
           !!this.newRestaurant.address && 
           !!this.newRestaurant.image;
  }

}
