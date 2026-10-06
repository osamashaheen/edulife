import { ElementRef } from '@angular/core';
import { ScrollDirective } from './scroll.directive';

describe('ScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new ScrollDirective(new ElementRef(document.createElement('div')));
    expect(directive).toBeTruthy();
  });
});
