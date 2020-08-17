import { Injectable } from "@angular/core";
import { BnAppConfigService } from 'src/app/common/services/bn-app-config.service';

@Injectable({
  providedIn: "root"
})
export class CoreCommonService {
  public APPLICATION_APP_API_HOST: string = "";
  public APPLICATION_APP_HOST: string = "";

  constructor(public bnAppConfigService: BnAppConfigService) {
    switch (bnAppConfigService.APLICACION_AMBIENTE) {
      case "localhost":
        this.APPLICATION_APP_API_HOST = "http://localhost:8080/api";
        this.APPLICATION_APP_HOST = "http://localhost:4200";
        break;
      case "desarrollo":
        this.APPLICATION_APP_API_HOST = "";
        this.APPLICATION_APP_HOST = "";
        break;
      case "produccion":
        this.APPLICATION_APP_API_HOST = "";
        this.APPLICATION_APP_HOST = "";
        break;
    }
  }
}
