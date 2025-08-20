import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

export interface WeddingConfig {
  bride: { name: string; };
  groom: { name: string; };
  ceremony: { venue: string; address: string; };
  reception: { venue: string; address: string; };
  date: string;
  fullDate: string;
  time: string;
  rsvpDeadline: string;
  rsvpLink: string;
  whatsappLink: string;
  message: string;
  giftInfo?: { message: string; link: string; };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  getConfig(): WeddingConfig {
    // Simplesmente retorna os dados do environment atual
    return environment.wedding;
  }
}
