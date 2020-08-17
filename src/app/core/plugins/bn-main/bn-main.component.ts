import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BnAppConfigService } from 'src/app/common/services/bn-app-config.service';

@Component({
  selector: 'app-bn-main',
  templateUrl: './bn-main.component.html',
  styleUrls: ['./bn-main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BnMainComponent implements OnInit {

  constructor(
    public bnAppConfigService: BnAppConfigService
  ) { }

  tabSeleccionado = 0;
  datosLogin: any = {};
  plugInsVisibles = [];
  plugInsEnEjecucion: any[] = [];
  tabprincipal: boolean;
  nombreModulo: string;

  cotizacion: boolean;
  casco: boolean = true;

  ngOnInit() {
    if (this.bnAppConfigService.APLICACION_AMBIENTE == 'localhost') {
      this.datosLogin = {
        usuario: 'cmallqui',
        nombreCompleto: 'El Buen Fontanero',
        opciones: null,
        perfil: 'ADMINISTRADOR',
      }
    }
    this.obtenerPlugins(this.datosLogin, "SV");
  }

  obtenerPlugins(datosLogin, modulo) {
    this.tabprincipal = true;
    this.tabSeleccionado = 0;
    if (datosLogin.perfil == "ADMINISTRADOR") {
      var idOpciones = [];
      switch(modulo){
        case "SV":
          idOpciones.push({ idOpcion: 1 });
          idOpciones.push({ idOpcion: 2 });
          idOpciones.push({ idOpcion: 3 });
          this.nombreModulo = "NUESTROS SERVICIOS";
          break;
        case "TR":
          idOpciones.push({ idOpcion: 4 });
          idOpciones.push({ idOpcion: 5 });
          idOpciones.push({ idOpcion: 6 });
          this.nombreModulo = "TRABAJA CON NOSOTROS";
          break
        case "CT":
          idOpciones.push({ idOpcion: 7 });
          idOpciones.push({ idOpcion: 8 });
          idOpciones.push({ idOpcion: 9 });
          this.nombreModulo = "COTIZACIONES";
          break
      }
      datosLogin["opciones"] = idOpciones;
    }

    var submodulos = [];
    for (let x = 0; x < datosLogin.opciones.length; x++){
      submodulos.push(this.plugins(datosLogin.opciones[x]['idOpcion']));
    }
    for (let i = 0; i < datosLogin.opciones.length; i++){
      this.plugInsVisibles = submodulos.filter(function ( plugIn ) {
        return plugIn.visible === true && plugIn.modulo === modulo;
      });
    }
  }

  plugins(id) {
    switch (id) {
      case 1:
        return {
          id: 1,
          nombre: "CONSTRUCCIONES",
          descripcion: "Aqui una descripción de Construcciones",
          titulo: "",
          componente: "app-construccion",
          imagen: "../../../assets/images/martillo.png",
          orden: 1,
          parametro: '{}',
          visible: true,
          modulo: "SV",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
      case 2:
        return {
          id: 2,
          nombre: "REPARACIONES",
          descripcion: "Aqui una descripción de Reparaciones",
          titulo: "",
          componente: "app-reparacion",
          imagen: "../../../assets/images/llaveinglesa.png",
          orden: 2,
          parametro: '{}',
          visible: true,
          modulo: "SV",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
      case 3:
        return {
          id: 3,
          nombre: "MANTENIMIENTO",
          descripcion: "Aqui una descripción de Mantenimiento",
          titulo: "",
          componente: "app-mantenimiento",
          imagen: "../../../assets/images/llaveallen.png",
          orden: 2,
          parametro: '{}',
          visible: true,
          modulo: "SV",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
      case 4:
        return {
          id: 4,
          nombre: "CURRICULUM",
          descripcion: "Ingresa o actualiza tu CV.",
          titulo: "",
          componente: "app-curriculum",
          imagen: "../../../assets/images/ingresaCV.png",
          orden: 1,
          parametro: '{}',
          visible: true,
          modulo: "TR",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
      case 5:
        return {
          id: 5,
          nombre: "COTIZACIÓN",
          descripcion: "Realiza Cotizaciones",
          titulo: "",
          componente: "app-cotizacion",
          imagen: "../../../assets/images/realizacotizacion.png",
          orden: 2,
          parametro: '{}',
          visible: true,
          modulo: "TR",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
      case 6:
        return {
          id: 6,
          nombre: "HISTORIAL DE SERVICIOS",
          descripcion: "Historial de servicios",
          titulo: "",
          componente: "app-historial-servicio",
          imagen: "../../../assets/images/historialservicios.png",
          orden: 3,
          parametro: '{}',
          visible: true,
          modulo: "TR",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
      case 7:
        return {
          id: 7,
          nombre: "COTIZACIÓN",
          descripcion: "Solicitar nueva cotización",
          titulo: "",
          componente: "app-cotizacion",
          imagen: "../../../assets/images/solicitarcotizacion.png",
          orden: 1,
          parametro: '{}',
          visible: true,
          modulo: "CT",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
      case 8:
        return {
          id: 8,
          nombre: "ESTADO DE SOLICITUDES",
          descripcion: "Estado de Solicitudes",
          titulo: "",
          componente: "app-historial-servicio",
          imagen: "../../../assets/images/estadosolicitudes.png",
          orden: 2,
          parametro: '{}',
          visible: true,
          modulo: "CT",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
      case 9:
        return {
          id: 9,
          nombre: "HISTORIAL DE solicitudes",
          descripcion: "Historial de solicitudes",
          titulo: "",
          componente: "app-historial-servicio",
          imagen: "../../../assets/images/historialservicios.png",
          orden: 3,
          parametro: '{}',
          visible: true,
          modulo: "CT",
          tipo_ejecucion: "1",
          url_app_externa: null,
        };
    }
  }

  emergencia = {
    id: 11,
    nombre: "EMERGENCIAS",
    descripcion: "Emergencias",
    titulo: "",
    componente: "app-emergencia",
    imagen: "",
    orden: 0,
    parametro: '{}',
    visible: true,
    tipo_ejecucion: "1",
    url_app_externa: null,
  };
  catalogomaterial = {
    id: 12,
    nombre: "CATÁLOGO DE MATERIALES",
    descripcion: "Emergencias",
    titulo: "",
    componente: "app-catalogo-material",
    imagen: "",
    orden: 0,
    parametro: '{}',
    visible: true,
    tipo_ejecucion: "1",
    url_app_externa: null,
  };
  quienessomos = {
    id: 13,
    nombre: "QUIENES SOMOS",
    descripcion: "Quienes Somos",
    titulo: "",
    componente: "app-quienes-somos",
    imagen: "",
    orden: 0,
    parametro: '{}',
    visible: true,
    tipo_ejecucion: "1",
    url_app_externa: null,
  };

  onClickCrearPlugIn(pligin) {
    switch (pligin.tipo_ejecucion) {
      case "1":
        var nuevaInstancia = Object.assign({}, pligin);
        if (typeof nuevaInstancia.parametro === "string")
          nuevaInstancia.parametro = JSON.parse(nuevaInstancia.parametro);
        var instanciasEnEjecucion = this.plugInsEnEjecucion.filter(function (plugIn) {
          return plugIn.id === nuevaInstancia.id;
        });
        nuevaInstancia.nroInstancia = instanciasEnEjecucion.length + 1;
        nuevaInstancia.localId = "plugIn" + nuevaInstancia.id + "-" + nuevaInstancia.nroInstancia;
        nuevaInstancia.parametro.plugInPadre = this;
        nuevaInstancia.parametro.plugIn = nuevaInstancia;
        this.plugInsEnEjecucion.push(nuevaInstancia);
        setTimeout(() => {
          this.tabSeleccionado = this.plugInsEnEjecucion.length + 1;
        }, 500);
        break;
      default:
        console.log("ERROR: El tipo de ejecucion no existe");
    }
  }

  cerrarTabPrincipal(){
    this.tabprincipal = false;
  }

  onClickCerrarPlugIn(p) {
    var i = 0;
    var siguienteActivo = 0;

    for (i = this.plugInsEnEjecucion.length - 1; i >= 0; i--) {
      if (this.plugInsEnEjecucion[i].localId == p.localId) {
        siguienteActivo = i + 1;
        this.plugInsEnEjecucion.splice(i, 1);
        break;
      }
    }
    setTimeout(() => {
      this.tabSeleccionado = siguienteActivo;
    }, 500);
  }
  //FIN DE CONFIGURACUÓN DE APLICACIÓN
  
  //=======================================================

  //FUNCIONES DE APP
  onClickIngresar(){
    this.casco = false;
    this.cotizacion = true;
  }

  facebook(){
    console.log("FACEBOOK");
  }

  youtube(){
    console.log("YOUTUBE");
  }
}
