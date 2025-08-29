import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class AppComponent {
  title = 'wedding-invitation';

  // Expondo as variáveis de ambiente para o template
  readonly weddingData = environment.wedding;
}
