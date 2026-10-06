import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  standalone: true,
  template: '<svg><script [attr.href]="url"></script></svg>',
})
class SvgScriptComponent {
  url = 'javascript:alert(1)';
}

// Current patched Angular versions remove SVG scripts entirely, preventing
// attacker-controlled href and xlink:href values from reaching the DOM.
describe('SVG script URL security (CVE-2026-22610)', () => {
  for (const attribute of ['href', 'xlink:href']) {
    it(`removes SVG scripts with untrusted ${attribute} bindings`, async () => {
      await TestBed.configureTestingModule({ imports: [SvgScriptComponent] })
        .overrideComponent(SvgScriptComponent, {
          set: { template: `<svg><script [attr.${attribute}]="url"></script></svg>` },
        })
        .compileComponents();

      const fixture = TestBed.createComponent(SvgScriptComponent);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('svg')).not.toBeNull();
      expect(fixture.nativeElement.querySelector('script')).toBeNull();
    });
  }
});
