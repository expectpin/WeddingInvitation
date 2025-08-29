// Environment para PRODUÇÃO (GitHub Pages)
// Dados substituídos automaticamente durante o build via GitHub Secrets
export const environment = {
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
    date: 'Mês/Ano',
    fullDate: 'Data Completa do Casamento',
    time: 'Horário',
    rsvpDeadline: 'Data Limite RSVP',
    rsvpLink: '#',
    whatsappLink: '#',
    message: 'Uma mensagem especial sobre o amor e a celebração.',
    giftInfo: {
      message: 'Sua presença já é nosso maior presente!',
      link: '#'
    }
  }
};
