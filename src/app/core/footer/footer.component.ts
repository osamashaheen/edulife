import { Component, inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SettingsService } from '../../shared/services/riyada-setting.service';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  settingsService = inject(SettingsService);

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 50, // Increase the gap between items
    navText: ['', ''],
    rtl: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 5 // Always show 5 items
      },
      400: {
        items: 5 // Always show 5 items
      },
      740: {
        items: 5 // Always show 5 items
      },
      940: {
        items: 5 // Always show 5 items
      },
      1110: {
        items: 5 // Always show 5 items
      }
    },
    nav: false
  };
  
  
  settingsInfo: any;


  ngOnInit(): void {
    this.settingsService.settings$.subscribe((data) => {
      this.settingsInfo = data; // Access the shared settings data
    });
  }
}