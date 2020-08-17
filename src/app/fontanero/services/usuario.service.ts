import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BnHttpApiService } from 'src/app/common/services/bn-http-api.service';
import { BnAppConfigService } from 'src/app/common/services/bn-app-config.service';
import { FontaneroHostService } from './fontanero-host.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public bnHttpApiService: BnHttpApiService,
    public bnAppConfigService: BnAppConfigService,
    public fontaneroHostService: FontaneroHostService,
    private cookieService: CookieService
  ) { }

  inicializar(parametro): any {
    return this.bnHttpApiService.post(
      this.fontaneroHostService.APPLICATION_API_HOST,
      "/usuario/inicializar",
      parametro
    );
  }
}
