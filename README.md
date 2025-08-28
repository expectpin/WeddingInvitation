# Wedding Invitation - Angular App

Um elegante convite de casamento desenvolvido em Angular 20+ com design responsivo e deploy automático no GitHub Pages.

## 🎨 Características

- ✨ Design elegante com paleta verde oliva e verde musgo
- 📱 Totalmente responsivo (desktop, tablet, mobile)
- 🔒 Sistema de variáveis de ambiente para proteção de dados pessoais
- 🚀 Deploy automático via GitHub Actions
- 🌿 Elementos decorativos florais
- ⚡ Performance otimizada

## 🛠️ Tecnologias

- **Angular 20.1.0** - Framework frontend moderno
- **TypeScript** - Linguagem tipada
- **CSS3** - Estilos customizados com variáveis CSS
- **GitHub Actions** - CI/CD automático
- **GitHub Pages** - Hospedagem gratuita

## 🏗️ Arquitetura

Este projeto utiliza a **arquitetura moderna do Angular** com:
- Componentes standalone (sem módulos)
- Bootstrap direto da aplicação
- Environment variables para configuração
- Testes unitários atualizados

## 🚀 Como usar

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm start

# Executar testes
npm test
```

### Deploy para GitHub Pages

O deploy é automático! Apenas:

1. Faça push para a branch `main` ou `master`
2. O GitHub Actions irá:
   - Instalar dependências
   - Executar testes
   - Fazer build de produção
   - Deploy no GitHub Pages

### Personalização

Para personalizar o convite:

1. **Desenvolvimento**: Edite `src/environments/environment.ts` com seus dados reais
2. **Produção**: Mantenha `src/environments/environment.prod.ts` com dados genéricos

```typescript
// environment.ts (desenvolvimento)
export const environment = {
  production: false,
  wedding: {
    bride: { name: 'Seu Nome' },
    groom: { name: 'Nome do Parceiro' },
    // ... outros dados
  }
};
```

## 📱 Responsividade

O design foi otimizado para:
- 🖥️ Desktop (1200px+)
- 📱 Tablet (768px - 1199px)  
- 📱 Mobile (até 767px)

## 🎯 Performance

- Bundle size otimizado: ~1.16 MB
- CSS enxuto: 280 linhas
- Build time: ~3.4 segundos

## 📄 Licença

Este é um projeto de portfólio. Sinta-se livre para usar como referência.

---

Desenvolvido com ❤️ usando Angular 20+
