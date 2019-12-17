import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SubirArchivoService } from 'src/app/services/service.index';
import { ModalUploadService } from './modal-upload.service';


@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {


  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;

  constructor(public _subirArchivo: SubirArchivoService,
    public _modalUpload: ModalUploadService) { }

  ngOnInit() {
  }

  seleccionImage(archivo: File) {

    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      Swal.fire('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result;


  }

  subirImagen() {
    this._subirArchivo.subirArchivo(this.imagenSubir, this._modalUpload.tipo, this._modalUpload.id)
      .then(res => {
        this._modalUpload.notificacion.emit(res);
        this.cerrarModal();

      })
      .catch(err => {
        console.log('Error en carga');
      });
  }

  cerrarModal() {

    this.imagenSubir = null;
    this.imagenTemp = null;
    this._modalUpload.ocultarModal();
  }

}
