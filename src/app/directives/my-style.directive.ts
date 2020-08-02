import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyStyle]',
})
export class MyStyleDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
  }
}
