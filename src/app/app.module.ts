import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeparatorComponent } from './shared/separator/separator.component';
import { CardComponent } from './shared/card/card.component';
import { AccordionComponent } from './shared/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    SeparatorComponent,
    CardComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
