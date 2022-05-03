import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appAlternateIf]',
})
export class AlternateIf implements OnChanges {
  @Input() appAlternateIf: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.appAlternateIf) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
}
