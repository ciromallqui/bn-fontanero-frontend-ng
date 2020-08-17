import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BnAppConfigService {
  public APLICACION_AMBIENTE: string = "localhost";
  public APLICACION_USUARIO: string = "cmallqui";
  public APLICACION_USUARIO_NOMBRE: string = "Ciro Mallqui";
  public APLICACION_PERFIL: string = "ADMINISTRADOR";
  public APLICACION_NOMBRE = "Plataforma Unica de servicios digitales";

  constructor() {}

  obtenerImagen(idPlugin) {
    switch (idPlugin) {
      case 1:
        return "assets/images/bandeja.png";
      case 12:
        return "assets/images/usuarios_secundarios.png";
      case 0:
        return "assets/images/casillas_electronicas.png";
      case 1:
        return "assets/images/mesa_partes.png";
      case 2:
        return "assets/images/expediente_virtual.png";
      case 3:
        return "assets/images/reporte_emergencias.png";
      case 4:
        return "assets/images/documents_64.png";
      case 5:
        return "assets/images/apr.png";
      case 6:
        return "assets/images/acceso_informacion.png";
      case 7:
        return "assets/images/quejas_reclamos.png";
      case 8:
        return "assets/images/other_64.png";
      default:
        return "assets/images/default_64.png";
    }
  }
}
