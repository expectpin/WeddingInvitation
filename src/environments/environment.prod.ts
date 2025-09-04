// Environment para PRODUÇÃO (GitHub Pages)
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  wedding: {
    bride: {
      name: 'Nome da Noiva'
    },
    groom: {
      name: 'Nome do Noivo'
    },
    ceremony: {
      venue: 'Local da Cerimônia',
      address: 'Endereço da Cerimônia, 123'
    },
    reception: {
      venue: 'Local da Recepção',
      address: 'Endereço da Recepção, 456'
    },
    dressCode: 'Traje social elegante',
    date: 'Mês/Ano',
    fullDate: 'Data Completa do Casamento',
    time: 'Horário',
    rsvpDeadline: 'Data Limite RSVP',
    rsvpLink: '#',
    whatsappNumber: '5500000000000',
    whatsappLink: '#',
    message: 'Uma mensagem especial sobre o amor e a celebração.',
    giftInfo: {
      message: 'Sua presença já é nosso maior presente!',
      link: '#'
    }
  }
};
