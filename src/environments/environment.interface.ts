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
  whatsappNumber: string;
  message: string;
  giftInfo: {
    message: string;
    link1: string;
    link2: string;
  };
}

export interface Environment {
  production: boolean;
  wedding: WeddingData;
}
