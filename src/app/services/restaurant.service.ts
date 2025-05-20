import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private readonly STORAGE_KEY = 'restaurants';
  private initialRestaurants: Restaurant[] = [
    {
      name: "La Parrilla del Chef",
      description: "Carnes a la parrilla y platos tradicionales colombianos.",
      address: "Calle 10 # 20-30, Medellín",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Sushi Palace",
      description: "Auténtica cocina japonesa con ingredientes frescos.",
      address: "Carrera 40 # 25-60, Medellín",
      image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Pizzeria Napoli",
      description: "Pizzas al horno de leña con recetas tradicionales italianas.",
      address: "Calle 50 # 30-15, Medellín",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80"
    }
  ]

  constructor() {
    this.initializeData();
    this.clearStorage();
   }

  private initializeData(): void {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.initialRestaurants));
    }
  }

  private clearStorage(): void {
  localStorage.removeItem(this.STORAGE_KEY);
}

  getRestaurants(): Restaurant[] {
  const stored = localStorage.getItem(this.STORAGE_KEY);

  if (!stored) {
    console.warn('No hay datos en localStorage, cargando iniciales');
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.initialRestaurants));
    return [...this.initialRestaurants];
  }
  
  return JSON.parse(stored);
}

  saveRestaurants(restaurants: Restaurant[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(restaurants));
  }

  addRestaurant(restaurant: Restaurant): void {
    const restaurants = this.getRestaurants();
    restaurants.push(restaurant);
    this.saveRestaurants(restaurants);
  }

  searchRestaurants(term: string): Restaurant[] {
    const lowerTerm = term.toLowerCase();
    return this.getRestaurants().filter(restaurant => 
      restaurant.name.toLowerCase().includes(lowerTerm) ||
      restaurant.description.toLowerCase().includes(lowerTerm) ||
      restaurant.address.toLowerCase().includes(lowerTerm)
    );
  }

  alert(title: any, message: any, icon: any){
    Swal.fire({
      title: title,
      text: message,
      icon: icon
    });
  }

}