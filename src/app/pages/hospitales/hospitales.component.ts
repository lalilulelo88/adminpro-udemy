import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from 'src/app/services/service.index';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  constructor(
    public _hospitaService: HospitalService,
    public _modalUpload: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUpload.notificacion
      .subscribe(() => this.cargarHospitales());
  }

  buscarHospital(termino: string) {

    if (termino.length <= 0) {
      this.cargarHospitales();
      return;
    }

    this._hospitaService.buscarHospital(termino)
      .subscribe(hospitales => this.hospitales = hospitales);
  }


  cargarHospitales() {
    this._hospitaService.cargarHospitales()
      .subscribe(hospitales => this.hospitales = hospitales);
  }

  guardarHospital(hospital: Hospital) {
    this._hospitaService.actualizarHospital(hospital)
      .subscribe();
  }

  borrarHospital(hospital: Hospital) {

    this._hospitaService.borrarHospital(hospital._id)
      .subscribe(() => this.cargarHospitales());
  }

  crearHospital() {

    Swal.fire({
      title: 'Crear Hospital',
      text: 'Ingrese Hospital',
      input: 'text',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then(valor => {

      if (!valor.value || valor.value.length === 0) {
        return;
      }
      this._hospitaService.crearHospital(valor.value)
        .subscribe(() => this.cargarHospitales());
    });
  }

  actualizarImagen(hospital: Hospital) {

    this._modalUpload.mostrarModal('hospitales', hospital._id);

  }
}
