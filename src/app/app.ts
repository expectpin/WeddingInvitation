import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

interface GuestData {
  firstName: string;
  lastName: string;
  phone: string;
}

interface FormData {
  guest: GuestData;
  companion: GuestData;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'wedding-invitation';

  // Expondo as variáveis de ambiente para o template
  readonly weddingData = environment.wedding;

  // Controle do formulário
  isFormVisible = false;
  showCompanionFields = false;

  // Dados do formulário
  formData: FormData = {
    guest: {
      firstName: '',
      lastName: '',
      phone: ''
    },
    companion: {
      firstName: '',
      lastName: '',
      phone: ''
    }
  };

  showConfirmationForm() {
    this.isFormVisible = true;
    
    // Aguarda o DOM ser atualizado antes de fazer o scroll
    setTimeout(() => {
      const formElement = document.getElementById('confirmationForm');
      if (formElement) {
        formElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }

  addCompanion() {
    this.showCompanionFields = true;
  }

  removeCompanion() {
    this.showCompanionFields = false;
    // Limpa os dados do acompanhante
    this.formData.companion = {
      firstName: '',
      lastName: '',
      phone: ''
    };
  }

  sendConfirmation() {
    // Validação básica
    if (!this.formData.guest.firstName || !this.formData.guest.lastName || !this.formData.guest.phone) {
      alert('Por favor, preencha todos os campos obrigatórios do convidado principal.');
      return;
    }

    // Validação do acompanhante se os campos estiverem visíveis
    if (this.showCompanionFields && (!this.formData.companion.firstName || !this.formData.companion.lastName)) {
      alert('Por favor, preencha todos os campos do acompanhante ou remova-o.');
      return;
    }

    const guestName = `${this.formData.guest.firstName} ${this.formData.guest.lastName}`;
    let message = `Olá! Confirmo presença no casamento de ${this.weddingData.bride.name} & ${this.weddingData.groom.name}!\n\n`;
    message += `*Convidado Principal:*\n`;
    message += `Nome: ${guestName}\n`;
    message += `Telefone: ${this.formData.guest.phone}\n`;

    if (this.showCompanionFields && this.formData.companion.firstName) {
      const companionName = `${this.formData.companion.firstName} ${this.formData.companion.lastName}`;
      message += `\n*Acompanhante:*\n`;
      message += `Nome: ${companionName}\n`;
    }

    message += `\nAguardamos vocês no nosso grande dia! 💚`;

    // Usa o número do WhatsApp do environment
    const whatsappNumber = this.weddingData.whatsappNumber;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre o WhatsApp
    window.open(whatsappUrl, '_blank');
  }
}
