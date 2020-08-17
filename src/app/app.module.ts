import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CookieService } from 'ngx-cookie-service';
import { NgxMaskModule } from 'ngx-mask';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule, MatSelectModule, MatPaginatorIntl } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { BnMainComponent } from './core/plugins/bn-main/bn-main.component';
import { EmergenciaComponent } from './fontanero/plugins/emergencia/emergencia.component';
import { QuienesSomosComponent } from './fontanero/plugins/quienes-somos/quienes-somos.component';
import { ConstruccionComponent } from './fontanero/plugins/construccion/construccion.component';
import { ReparacionComponent } from './fontanero/plugins/reparacion/reparacion.component';
import { MantenimientoComponent } from './fontanero/plugins/mantenimiento/mantenimiento.component';
import { CurriculumComponent } from './fontanero/plugins/curriculum/curriculum.component';
import { CotizacionComponent } from './fontanero/plugins/cotizacion/cotizacion.component';
import { HistorialServicioComponent } from './fontanero/plugins/historial-servicio/historial-servicio.component';
import { CatalogoMaterialComponent } from './fontanero/plugins/catalogo-material/catalogo-material.component';

@NgModule({
  declarations: [
    AppComponent,
    BnMainComponent,
    EmergenciaComponent,
    QuienesSomosComponent,
    ConstruccionComponent,
    ReparacionComponent,
    MantenimientoComponent,
    CurriculumComponent,
    CotizacionComponent,
    HistorialServicioComponent,
    CatalogoMaterialComponent
  ],
  imports: [BrowserModule, MaterialModule, BrowserAnimationsModule, FlexLayoutModule, NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule, NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: "BASE_URL", useFactory: getBaseUrl },
    CookieService,
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: MatPaginatorIntl },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'es-419',
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6Lftbr4ZAAAAAPgD-Wlgv1aorLwEP2rwDNu7yx-k' } as RecaptchaSettings,
    },
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}
