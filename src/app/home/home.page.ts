import { Component, OnInit } from '@angular/core';
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
      descripcion: 'Género que ha perdurado siglos y tiene gran riqueza instrumental.',
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
    private router: Router
  ) {}

  ngOnInit(): void {
    register();

    this.storage.get('introVisto').then((valor) => {
      // Mostrar intro solo si no está marcada como vista
      this.mostrarIntro = valor !== true;
      console.log('¿Intro vista anteriormente?:', valor);
    });
  }

  cambiarTema() {
    this.isDarkMode = !this.isDarkMode;
    const tema = this.isDarkMode ? 'dark' : 'light';
    document.body.setAttribute('color-theme', tema);
    console.log('Tema cambiado a:', tema);
  }

  verIntroNuevamente() {
    console.log('Ver intro nuevamente: borrando variable');
    this.storage.remove('introVisto').then(() => {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    });
  }

  empezarApp() {
    this.storage.set('introVisto', true).then(() => {
      this.mostrarIntro = false;
      console.log('Intro marcada como vista. Mostrando contenido principal');
    });
  }

  entrarApp() {
    // Opción 1: Solo ocultar intro para mostrar contenido principal
    this.mostrarIntro = false;

    // Opción 2: Navegar a otra ruta (descomenta si quieres usar navegación)
    // this.router.navigateByUrl('/otra-ruta');
  }
}
