import { Component, OnInit, Renderer2 } from '@angular/core';
import { SettingsService } from './shared/services/riyada-setting.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  settings$ = this.settingsService.settings$;

  constructor(private settingsService: SettingsService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.settingsService.getSettings().subscribe((data: Record<string, any>) => {
      this.settingsService.setDataSettings(data);

      if (data['affilate_code_website']) {
        this.addGoogleAnalyticsScript(data['affilate_code_website']);
      }
    });
  }

  private addGoogleAnalyticsScript(scriptContent: string): void {
    const div = this.renderer.createElement('div');
    div.innerHTML = scriptContent;

    const scripts = Array.from(div.getElementsByTagName('script')) as HTMLScriptElement[];

    scripts.forEach((script: HTMLScriptElement) => {
      const s = this.renderer.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      if (script.src) {
        s.src = script.src; 
      } else {
        s.text = script.innerHTML;
      }
      this.renderer.appendChild(document.head, s);
    });
  }
}
