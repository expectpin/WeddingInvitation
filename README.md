# 💒 Wedding Invitation - Convite de Casamento

Uma aplicação Angular moderna e responsiva para convites de casamento digitais, desenvolvida para ser hospedada no GitHub Pages.

## ✨ Características

- 🎨 Design elegante e responsivo
- 📱 Otimizado para mobile, tablet e desktop
- ⚙️ Configuração via variáveis de ambiente
- 🚀 Deploy automático no GitHub Pages
- 🔒 Dados pessoais protegidos com GitHub Secrets
- 💕 Interface romântica e moderna

## 🛠️ Tecnologias Utilizadas

- Angular 18+
- TypeScript
- CSS3 com Grid e Flexbox
- GitHub Actions
- GitHub Pages

## 🚀 Como Usar Este Projeto

### 1. Fork ou Clone o Repositório

```bash
git clone https://github.com/seu-usuario/wedding-invitation.git
cd wedding-invitation
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configuração Local (Desenvolvimento)

Para testar localmente com seus dados, você pode:

1. Copiar o arquivo `.env.example` para `.env`
2. Preencher com seus dados reais
3. Ou usar o localStorage do navegador para configurar temporariamente

```bash
cp .env.example .env
```

### 4. Execute Localmente

```bash
ng serve
```

Acesse `http://localhost:4200`

## 🔐 Configuração para Produção (GitHub Pages)

### 1. Configure os GitHub Secrets

No seu repositório GitHub, vá em **Settings > Secrets and variables > Actions** e adicione os seguintes secrets:

| Secret Name | Descrição | Exemplo |
|-------------|-----------|---------|
| `BRIDE_NAME` | Nome da noiva | "Maria Silva" |
| `GROOM_NAME` | Nome do noivo | "João Santos" |
| `CEREMONY_VENUE` | Local da cerimônia | "Igreja São José" |
| `CEREMONY_ADDRESS` | Endereço da cerimônia | "Rua das Flores, 123" |
| `RECEPTION_VENUE` | Local da recepção | "Salão de Festas Encanto" |
| `RECEPTION_ADDRESS` | Endereço da recepção | "Av. das Palmeiras, 456" |
| `WEDDING_DATE` | Data resumida | "Setembro 2025" |
| `WEDDING_FULL_DATE` | Data completa | "Sábado, 20 de Setembro de 2025" |
| `WEDDING_TIME` | Horário | "16:00" |
| `RSVP_DEADLINE` | Prazo para confirmação | "15 de Agosto de 2025" |
| `RSVP_LINK` | Link do formulário RSVP | "https://forms.google.com/..." |
| `WHATSAPP_LINK` | Link do WhatsApp | "https://wa.me/5511999999999?text=..." |
| `WEDDING_MESSAGE` | Mensagem especial | "Dois corações se unem..." |
| `GIFT_MESSAGE` | Mensagem sobre presentes | "Sua presença já é..." |
| `GIFT_LINK` | Link da lista de presentes | "https://lista.com/..." |

### 2. Ative o GitHub Pages

1. Vá em **Settings > Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O workflow será executado automaticamente a cada push na branch `main`

### 3. Acesse Sua Aplicação

Após o deploy, sua aplicação estará disponível em:
`https://seu-usuario.github.io/wedding-invitation/`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── app.ts              # Componente principal
│   ├── app.html            # Template do convite
│   ├── app.css             # Estilos do convite
│   └── config.service.ts   # Serviço de configuração
├── environments/
│   ├── environment.ts      # Configuração de desenvolvimento
│   ├── environment.prod.ts # Configuração de produção
│   └── environment.prod.ts.template # Template para GitHub Actions
└── styles.css              # Estilos globais
```

## 🎨 Personalização

### Cores e Temas

Edite as variáveis CSS no arquivo `app.css` para personalizar as cores:

```css
:root {
  --primary-rose: #d63384;
  --primary-gold: #f8b500;
  --soft-cream: #faf7f2;
  /* ... outras cores */
}
```

### Layout e Seções

O convite possui as seguintes seções que podem ser personalizadas:

- **Hero Section**: Nomes dos noivos e data
- **Detalhes**: Data, cerimônia e recepção
- **RSVP**: Confirmação de presença
- **Mensagem**: Texto especial dos noivos
- **Presentes**: Lista de presentes (opcional)
- **Footer**: Informações finais

## 🔧 Desenvolvimento

### Comandos Úteis

```bash
# Desenvolvimento
ng serve

# Build para produção
ng build --configuration production

# Testes
ng test

# Linting
ng lint
```

### Configuração de Desenvolvimento

Durante o desenvolvimento, você pode usar o localStorage para testar diferentes configurações:

```javascript
// No console do navegador
const configService = app.get(ConfigService);
configService.setDevelopmentConfig({
  bride: { name: 'Teste Noiva' },
  groom: { name: 'Teste Noivo' }
});
```

## 📝 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar feedback

## 💡 Ideias Futuras

- [ ] Galeria de fotos
- [ ] Cronograma do evento
- [ ] Mapa interativo
- [ ] Playlist colaborativa
- [ ] Chat para convidados
- [ ] Contador regressivo

## 📞 Suporte

Se você tiver dúvidas ou precisar de ajuda, abra uma issue no GitHub.

---

**Feito com 💕 para celebrar o amor**
