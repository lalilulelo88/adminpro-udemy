import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
    titulo: 'Principal',
    icono: 'mdi mdi-gauge',
    submenu: [
      {titulo: 'Dashboard', url: '/dashboard'},
      {titulo: 'ProgressBar', url: '/progress'},
      {titulo: 'Graficas', url: '/graficas1'},
      {titulo: 'Promesas', url: '/promesas'},
      {titulo: 'Rxjs', url: '/rxjs'},
      {titulo: 'Ajustes', url: '/account-settings'}

    ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-wrench',
      submenu: [
        {titulo: 'Usuarios', url: '/usuarios'},
        {titulo: 'Hospitales', url: '/hospitales'},
        {titulo: 'Medicos', url: '/medicos'}
  
      ]
      }
  ];
  constructor() { }
}
