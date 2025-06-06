import { Injectable, inject } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Firestore, collection, addDoc, collectionData, query, where } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { setLogLevel, LogLevel } from "@angular/fire";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private readonly COLLECTION_NAME = 'restaurants';
  private firestore: Firestore = inject(Firestore);

  getRestaurants(): Observable<Restaurant[]> {
    const restaurantsRef = collection(this.firestore, this.COLLECTION_NAME);
    return collectionData(restaurantsRef, { idField: 'id' }) as Observable<Restaurant[]>;
  }

  async addRestaurant(restaurant: Restaurant): Promise<void> {
    try {
      const restaurantsRef = collection(this.firestore, this.COLLECTION_NAME);
      await addDoc(restaurantsRef, restaurant);
      this.showAlert('Éxito', 'Restaurante creado correctamente', 'success');
    } catch (error) {
      this.showAlert('Error', 'No se pudo crear el restaurante', 'error');
      console.error("Error adding restaurant: ", error);
      throw error;
    }
  }

searchRestaurants(term: string): Observable<Restaurant[]> {
  const searchTerm = term.toLowerCase();
  const restaurantsRef = collection(this.firestore, 'restaurants');
  
  return (collectionData(restaurantsRef, { idField: 'id' }) as Observable<Restaurant[]>).pipe(
    map(restaurants => restaurants.filter(r => 
      r.name.toLowerCase().includes(searchTerm) ||
      r.description.toLowerCase().includes(searchTerm) ||
      r.address.toLowerCase().includes(searchTerm)
    )
  ));
}

  private showAlert(title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info') {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'Aceptar'
    });
  }

  
}