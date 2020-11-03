import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlueClick]'
})
export class BlueClickDirective {
  test = false;
  constructor(private elmenetRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event'])
  changeBackground(): void {
    this.test = !this.test
    if (this.test) {
      this.renderer.removeClass(this.elmenetRef.nativeElement, 'collapseElement');
      this.renderer.addClass(this.elmenetRef.nativeElement, 'expandElenemt');
    } else {
      this.renderer.removeClass(this.elmenetRef.nativeElement, 'expandElenemt');
      this.renderer.addClass(this.elmenetRef.nativeElement, 'collapseElement');
    }
  }
}
