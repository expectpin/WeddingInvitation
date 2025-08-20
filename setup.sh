#!/bin/bash

# Script para configuração rápida do projeto
echo "🎉 Configurando projeto Wedding Invitation..."

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Criar arquivo .env se não existir
if [ ! -f .env ]; then
    echo "📝 Criando arquivo .env..."
    cp .env.example .env
    echo "✅ Arquivo .env criado! Edite-o com seus dados pessoais."
else
    echo "ℹ️  Arquivo .env já existe."
fi

# Verificar se Angular CLI está instalado
if ! command -v ng &> /dev/null; then
    echo "🔧 Instalando Angular CLI..."
    npm install -g @angular/cli
fi

echo "🚀 Configuração concluída!"
echo "📋 Próximos passos:"
echo "   1. Edite o arquivo .env com seus dados"
echo "   2. Execute: ng serve"
echo "   3. Acesse: http://localhost:4200"
