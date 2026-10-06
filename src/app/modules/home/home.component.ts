import { Component, inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SettingsService } from '../../shared/services/riyada-setting.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  baseUrl = environment.baseUrl;
  aboutSloganImage: string | null = null;
  settingsInfo: any;
  settingsService = inject(SettingsService);
  storageService = inject(StorageService)
  router = inject(Router)
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin: 20,
    navText: ['', ''],
    rtl: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  sloganImage: string | null = null;
  bestSellers: any[] = [];
  instagramPosts: any[] = []; // New: Instagram posts

  ngOnInit(): void {
    this.getSettingsData()
    this.getBestSellers()
    // this.getInstagramFeeds()
  }

  getSettingsData() {
    this.settingsService.getSettings().subscribe((response: any) => {
      this.settingsService.setDataSettings(response); 
      this.settingsInfo = response;
      const adjustedBaseUrl = this.baseUrl.replace('/api', '');
      this.aboutSloganImage = adjustedBaseUrl + this.settingsInfo.about_image
      this.sloganImage = adjustedBaseUrl + this.settingsInfo.slogan_image
    });
  }

  getBestSellers(): void {
    this.settingsService.getBestSellers('ar').subscribe({
      next: (response) => {
        this.bestSellers = response.data;
      },
      error: (error) => {
        console.error('Error fetching best sellers:', error);
      },
    });
  }


  // // New: Fetch Instagram feeds
  // getInstagramFeeds(): void {
  //   const accessToken = this.storageService.getItem('access_token');
  //   this.settingsService.getInstagramFeeds(accessToken).subscribe({
  //     next: (posts) => {
  //       this.instagramPosts = posts;
  //       console.log('Instagram Posts:', this.instagramPosts);
  //     },
  //     error: (err) => console.error('Error fetching Instagram posts:', err),
  //   });
  // }
  
  
  

}