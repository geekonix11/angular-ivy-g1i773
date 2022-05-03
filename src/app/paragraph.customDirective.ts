import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[paraDirective]',
})
export class ParagraphDirective implements OnInit {
  el2: ElementRef;
  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.color = 'red';
    this.el2 = el;
  }

  ngOnInit() {
    this.el2.nativeElement.innerHTML += '  --Rendered from directive';
  }
}
