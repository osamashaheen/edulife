import { Component, inject, OnInit } from '@angular/core';
import { SettingsService } from '../../shared/services/riyada-setting.service';
import { environment } from '../../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  baseUrl = environment.baseUrl;

  settingsService = inject(SettingsService);
  settingsInfo: any;
  vision_ar: string | null = null;
  target_ar: string | null = null
  staticties_ar: string | null = null;
  mision_ar: string | null = null;
  aboutSloganImage!: string;
  aboutImage!: string;

  ngOnInit(): void {
    this.getSettingsData()
  }

  getSettingsData() {
    this.settingsService.getSettings().subscribe((response: any) => {
      this.settingsService.setDataSettings(response); // Store settings in the service
      this.settingsInfo = response;
      const adjustedBaseUrl = this.baseUrl.replace('/api', '');
      this.aboutSloganImage = adjustedBaseUrl + this.settingsInfo.about_slogan_image
      this.aboutImage = adjustedBaseUrl + this.settingsInfo.about_image
    });
  }

}
