import { Injectable } from "@angular/core";
import { BnAppConfigService } from 'src/app/common/services/bn-app-config.service';

@Injectable({
  providedIn: "root"
})
export class FontaneroHostService {
  public APPLICATION_API_HOST: string = "";

  constructor(public bnAppConfigService: BnAppConfigService) {
    switch (this.bnAppConfigService.APLICACION_AMBIENTE) {
      case "localhost":
        this.APPLICATION_API_HOST = "http://localhost:8080/api";
        break;
      case "desarrollo":
        this.APPLICATION_API_HOST = "";
        break;
      case "produccion":
        this.APPLICATION_API_HOST = "";
        break;
    }
  }
}
