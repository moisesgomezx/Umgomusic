import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    NgIf,
    NgFor,
    NgClass
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  isDarkMode = false;
  mostrarIntro = true;

  generosMusicales = [
    {
      titulo: 'Música Clásica',
      imagen: 'assets/clasica.jpg',
      descripcion: 'Género que ha perdurado siglos con riqueza instrumental.',
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

  constructor(
    private storage: StorageService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    register();
    this.renderer.setAttribute(document.body, 'color-theme', 'light');
    this.storage.get('introVisto').then((valor) => {
      this.mostrarIntro = valor !== true;
    });
  }

  cambiarTema() {
    this.isDarkMode = !this.isDarkMode;
    const tema = this.isDarkMode ? 'dark' : 'light';
    this.renderer.setAttribute(document.body, 'color-theme', tema);
  }

  verIntroNuevamente() {
    this.storage.remove('introVisto').then(() => {
      this.mostrarIntro = false;
    });
  }

  verHome() {
    this.storage.set('introVisto', true).then(() => {
      this.mostrarIntro = true;
    });
  }

}
