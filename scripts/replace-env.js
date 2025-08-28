#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Função para criar environment.ts genérico para testes (se não existir)
function createTestEnvironment() {
  const envTestPath = path.join(__dirname, '../src/environments/environment.ts');

  // Se o arquivo já existe, não sobrescrever (desenvolvimento local)
  if (fs.existsSync(envTestPath)) {
    console.log('✅ environment.ts already exists (development mode)');
    return;
  }

  // Template genérico para testes no CI
  const envTestTemplate = `// Environment para DESENVOLVIMENTO/TESTES (gerado automaticamente no CI)
export const environment = {
  production: false,
  wedding: {
    bride: { name: 'Test Bride' },
    groom: { name: 'Test Groom' },
    ceremony: {
      venue: 'Test Ceremony Venue',
      address: 'Test Ceremony Address, 123'
    },
    reception: {
      venue: 'Test Reception Venue',
      address: 'Test Reception Address, 456'
    },
    date: '01/01/2025',
    fullDate: 'Test Date, 01 de Janeiro de 2025',
    time: '18:00',
    rsvpDeadline: '01 de dezembro de 2024',
    rsvpLink: 'https://example.com/rsvp',
    whatsappLink: 'https://wa.me/5500000000000',
    message: 'Test wedding message for development and testing.',
    giftInfo: {
      message: 'Test gift message.',
      link: 'https://example.com/gifts'
    }
  }
};
`;

  fs.writeFileSync(envTestPath, envTestTemplate);
  console.log('✅ environment.ts created for testing!');
}

// Função para substituir variáveis de ambiente no arquivo de produção
function replaceEnvironmentVariables() {
  const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');

  // Template do arquivo de produção com placeholders
  const envTemplate = `// Environment para PRODUÇÃO (GitHub Pages)
// Dados substituídos durante o build via GitHub Secrets
export const environment = {
  production: true,
  wedding: {
    bride: {
      name: '${process.env.BRIDE_NAME || 'Nome da Noiva'}'
    },
    groom: {
      name: '${process.env.GROOM_NAME || 'Nome do Noivo'}'
    },
    ceremony: {
      venue: '${process.env.CEREMONY_VENUE || 'Local da Cerimônia'}',
      address: '${process.env.CEREMONY_ADDRESS || 'Endereço da Cerimônia, 123'}'
    },
    reception: {
      venue: '${process.env.RECEPTION_VENUE || 'Local da Recepção'}',
      address: '${process.env.RECEPTION_ADDRESS || 'Endereço da Recepção, 456'}'
    },
    date: '${process.env.WEDDING_DATE || 'Mês/Ano'}',
    fullDate: '${process.env.WEDDING_FULL_DATE || 'Data Completa do Casamento'}',
    time: '${process.env.WEDDING_TIME || 'Horário'}',
    rsvpDeadline: '${process.env.RSVP_DEADLINE || 'Data Limite RSVP'}',
    rsvpLink: '${process.env.RSVP_LINK || '#'}',
    whatsappLink: '${process.env.WHATSAPP_LINK || '#'}',
    message: '${process.env.WEDDING_MESSAGE || 'Uma mensagem especial sobre o amor e a celebração. Este é um exemplo de convite de casamento desenvolvido em Angular.'}',
    giftInfo: {
      message: '${process.env.GIFT_MESSAGE || 'Este é um projeto de demonstração para portfólio.'}',
      link: '${process.env.GIFT_LINK || '#'}'
    }
  }
};
`;

  // Escrever o arquivo com as variáveis substituídas
  fs.writeFileSync(envProdPath, envTemplate);
  console.log('✅ Environment variables replaced successfully!');
}

// Executar ambas as funções
function setupEnvironments() {
  createTestEnvironment();
  replaceEnvironmentVariables();
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  setupEnvironments();
}

module.exports = { createTestEnvironment, replaceEnvironmentVariables, setupEnvironments };
