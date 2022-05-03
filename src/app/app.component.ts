import { Component, PipeTransform, VERSION, Pipe } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  isVisible = false;
  isAlternateIf: boolean = true;
}

@Pipe({
  name: 'TitleCase',
})
export class CustomPipe implements PipeTransform {
  transform(someValue: string): string {
    return someValue.toUpperCase();
  }
}
