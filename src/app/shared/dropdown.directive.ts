import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  open: boolean = false;
  constructor(private elemRef: ElementRef, private render: Renderer2) {}

  @HostListener('document:click', ['$event']) clicked(eventData: Event) {
    if (this.elemRef.nativeElement.contains(eventData.target)) {
      this.render.addClass(this.elemRef.nativeElement, 'open');
    } else {
      this.render.removeClass(this.elemRef.nativeElement, 'open');
    }

    this.open = !this.open;
  }
}
