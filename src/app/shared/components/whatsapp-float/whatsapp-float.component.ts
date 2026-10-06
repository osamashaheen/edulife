import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-whatsapp-float',
  templateUrl: './whatsapp-float.component.html',
  styleUrls: ['./whatsapp-float.component.scss'],
})
export class WhatsappFloatComponent {
  @Input() phone: string = '';
  @Input() message: string = '';

  get whatsappUrl(): string {
    return `https://api.whatsapp.com/send?phone=${this.phone}&text=${encodeURIComponent(this.message)}`;
  }
}
