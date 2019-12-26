import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Medico } from '../../models/medico.model';



@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  totalMedicos: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService

  ) { }

  cargarMedicos(desde: number = 0) {

    let url = URL_SERVICIOS + '/medico?desde=' + desde;
    return this.http.get(url)
      .pipe(map((res: any) => {
        this.totalMedicos = res.total;
        return res.medicos;
      }));
  }

  cargarMedico(id: string) {
    let url = URL_SERVICIOS + '/medico/' + id;
    return this.http.get(url)
      .pipe(map((res: any) => res.medico));
  }

  buscarMedicos(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
    return this.http.get(url)
      .pipe(map((res: any) => res.medicos));
  }

  borrarMedico(id: string) {
    let url = URL_SERVICIOS + '/medico/' + id;
    url += '?token=' + this._usuarioService.token;
    return this.http.delete(url)
      .pipe(map(res => Swal.fire('Medico Borrado', 'Eliminado correctamente', 'success')));
  }

  guardarMedico(medico: Medico) {
    let url = URL_SERVICIOS + '/medico';

    if (medico._id) {
      url += '/' + medico._id;
      url += '?token=' + this._usuarioService.token;

      return this.http.put(url, medico)
        .pipe(map((res: any) => {
          Swal.fire('Medico Actualizado', medico.nombre, 'success');
          return res.medico;
        }));

    } else {
      url += '?token=' + this._usuarioService.token;

      return this.http.post(url, medico)
        .pipe(map((res: any) => {
          Swal.fire('Medico Creado', medico.nombre, 'success');
          return res.medico;
        }));
    }









  }


}
