import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appScroll]'
})
export class ScrollDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.scrollY;
    const element = this.elementRef.nativeElement;
    if (scrollPosition > 200) {
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  }
}