import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, CustomPipe } from './app.component';
import { HelloComponent } from './hello.component';
import { ParagraphDirective } from './paragraph.customDirective';
import { AlternateIf } from './AlternateIf.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomPipe,
    ParagraphDirective,
    AlternateIf,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
