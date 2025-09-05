#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Função para criar environment.ts genérico para desenvolvimento (se não existir)
function createDevEnvironment() {
  const envDevPath = path.join(__dirname, '../src/environments/environment.ts');

  // Se o arquivo já existe, não sobrescrever (desenvolvimento local)
  if (fs.existsSync(envDevPath)) {
    console.log('✅ environment.ts already exists (development mode)');
    return;
  }

  // Template genérico apenas para desenvolvimento/CI quando não existe arquivo local
  const envDevTemplate = `// Environment para DESENVOLVIMENTO/TESTES (gerado automaticamente)
import { Environment } from './environment.interface';

export const environment: Environment = {
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
    dressCode: 'Traje social elegante.',
    date: '01/01/2025',
    fullDate: 'Test Date, 01 de Janeiro de 2025',
    time: '18:00',
    rsvpDeadline: '01 de dezembro de 2024',
    whatsappNumber: '5500000000000',
    message: 'Test wedding message for development and testing.',
    giftInfo: {
      message: 'Test gift message.',
      link1: 'https://example.com/gifts',
      link2: 'https://example.com/gifts2'
    }
  }
};
`;

  fs.writeFileSync(envDevPath, envDevTemplate);
  console.log('✅ environment.ts created for testing!');
}

// Função PRINCIPAL: substituir variáveis de ambiente no arquivo de PRODUÇÃO
function replaceEnvironmentVariables() {
  const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');

  console.log('🔧 Applying environment variables to production config...');
  console.log('📍 Target file:', envProdPath);

  // Valores das variáveis de ambiente (com fallbacks de exemplo)
  const envVars = {
    BRIDE_NAME: process.env.BRIDE_NAME || 'Nome da Noiva',
    GROOM_NAME: process.env.GROOM_NAME || 'Nome do Noivo',
    CEREMONY_VENUE: process.env.CEREMONY_VENUE || 'Local da Cerimônia',
    CEREMONY_ADDRESS: process.env.CEREMONY_ADDRESS || 'Endereço da Cerimônia, 123',
    RECEPTION_VENUE: process.env.RECEPTION_VENUE || 'Local da Recepção',
    RECEPTION_ADDRESS: process.env.RECEPTION_ADDRESS || 'Endereço da Recepção, 456',
    DRESS_CODE: process.env.DRESS_CODE || 'Traje social elegante.',
    WEDDING_DATE: process.env.WEDDING_DATE || 'Mês/Ano',
    WEDDING_FULL_DATE: process.env.WEDDING_FULL_DATE || 'Data Completa do Casamento',
    WEDDING_TIME: process.env.WEDDING_TIME || 'Horário',
    RSVP_DEADLINE: process.env.RSVP_DEADLINE || 'Data Limite RSVP',
    WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER || '5500000000000',
    WEDDING_MESSAGE: process.env.WEDDING_MESSAGE || 'Uma mensagem especial sobre o amor e a celebração.',
    GIFT_MESSAGE: process.env.GIFT_MESSAGE || 'Sua presença já é nosso maior presente!',
    GIFT_LINK1: process.env.GIFT_LINK1 || '#',
    GIFT_LINK2: process.env.GIFT_LINK2 || '#'
  };

  // Log das variáveis (sem expor dados sensíveis)
  console.log('📋 Environment variables status:');
  Object.keys(envVars).forEach(key => {
    const value = envVars[key];
    const isDefault = !process.env[key];
    console.log(`   ${key}: ${isDefault ? '[DEFAULT]' : '[SET]'} ${value.substring(0, 20)}${value.length > 20 ? '...' : ''}`);
  });

  // Template do arquivo de produção com valores reais
  const envProdTemplate = `// Environment para PRODUÇÃO (GitHub Pages)
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  wedding: {
    bride: {
      name: '${envVars.BRIDE_NAME}'
    },
    groom: {
      name: '${envVars.GROOM_NAME}'
    },
    ceremony: {
      venue: '${envVars.CEREMONY_VENUE}',
      address: '${envVars.CEREMONY_ADDRESS}'
    },
    reception: {
      venue: '${envVars.RECEPTION_VENUE}',
      address: '${envVars.RECEPTION_ADDRESS}'
    },
    dressCode: '${envVars.DRESS_CODE}',
    date: '${envVars.WEDDING_DATE}',
    fullDate: '${envVars.WEDDING_FULL_DATE}',
    time: '${envVars.WEDDING_TIME}',
    rsvpDeadline: '${envVars.RSVP_DEADLINE}',
    whatsappNumber: '${envVars.WHATSAPP_NUMBER}',
    message: '${envVars.WEDDING_MESSAGE}',
    giftInfo: {
      message: '${envVars.GIFT_MESSAGE}',
      link1: '${envVars.GIFT_LINK1}',
      link2: '${envVars.GIFT_LINK2}'
    }
  }
};
`;

  // Escrever o arquivo com as variáveis substituídas
  fs.writeFileSync(envProdPath, envProdTemplate);
  console.log('✅ Environment variables successfully applied to production config!');
  console.log('🚀 Production build ready with your secrets!');
}

// Executar as funções
function setupEnvironments() {
  console.log('🔄 Setting up environments for build...');
  createDevEnvironment();
  replaceEnvironmentVariables();
  console.log('🎉 Environment setup completed!');
}

// Executar apenas se chamado diretamente
if (require.main === module) {
  setupEnvironments();
}

module.exports = { createDevEnvironment, replaceEnvironmentVariables, setupEnvironments };
