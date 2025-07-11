import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common'; // ✅ Agregado NgClass
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, NgIf, NgFor, NgClass], // ✅ Incluido aquí
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  isDarkMode = false;

  generosMusicales = [
    {
      titulo: 'Música Clásica',
      imagen: 'assets/clasica.jpg',
      descripcion:
        'Género que ha perdurado siglos y tiene gran riqueza instrumental.',
      estilo: 'clasica',
    },
    {
      titulo: 'Reggaetón',
      imagen: 'assets/reggaeton.jpg',
      descripcion: 'Género urbano con ritmos latinos y letras bailables.',
      estilo: 'reggaeton',
    },
    {
      titulo: 'Rock',
      imagen: 'assets/rock.jpg',
      descripcion: 'Guitarras eléctricas, baterías potentes y mucha energía.',
      estilo: 'rock',
    },
    {
      titulo: 'Jazz',
      imagen: 'assets/jazz.jpg',
      descripcion: 'Improvisación, armonía y una rica tradición musical.',
      estilo: 'jazz',
    },
  ];

  ngOnInit(): void {
    register(); // ✅ Registro de elementos Swiper
  }

  cambiarTema() {
    this.isDarkMode = !this.isDarkMode;
    document.body.setAttribute(
      'color-theme',
      this.isDarkMode ? 'dark' : 'light'
    );
  }
}
