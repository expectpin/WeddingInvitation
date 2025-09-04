export interface WeddingData {
  bride: {
    name: string;
  };
  groom: {
    name: string;
  };
  ceremony: {
    venue: string;
    address: string;
  };
  reception: {
    venue: string;
    address: string;
  };
  dressCode: string;
  date: string;
  fullDate: string;
  time: string;
  rsvpDeadline: string;
  rsvpLink: string;
  whatsappNumber: string;
  whatsappLink: string;
  message: string;
  giftInfo: {
    message: string;
    link: string;
  };
}

export interface Environment {
  production: boolean;
  wedding: WeddingData;
}
