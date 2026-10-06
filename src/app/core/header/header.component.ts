import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoginPopupVisible = false;
  isSignupPopupVisible = false;
  userName: string | null = null;

  constructor(private storageService: StorageService, public route: Router) {}

  ngOnInit() {
    this.storageService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }

  showLoginPopup() {
    this.isLoginPopupVisible = true;
    this.isSignupPopupVisible = false;
  }

  showSignupPopup() {
    this.isSignupPopupVisible = true;
    this.isLoginPopupVisible = false;
  }

  closePopups() {
    this.isLoginPopupVisible = false;
    this.isSignupPopupVisible = false;
  }

  handleUserLoggedIn(userName: string) {
    this.userName = userName;
    this.storageService.setItem('user_name', userName);
  }

  handleUserRegistered(userName: string) {
    this.userName = userName;
    this.storageService.setItem('user_name', userName);
  }

  scrollToFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
