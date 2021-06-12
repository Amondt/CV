import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { MainContentComponent } from './main-content/main-content.component';
import { IntroductionComponent } from './info-panel/introduction/introduction.component';
import { ContactComponent } from './info-panel/contact/contact.component';
import { LanguagesComponent } from './info-panel/languages/languages.component';
import { HobbiesComponent } from './info-panel/hobbies/hobbies.component';
import { TimelineComponent } from './main-content/timeline/timeline.component';
import { ListComponent } from './main-content/list/list.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { TitleComponent } from './shared/components/title/title.component';

@NgModule({
  declarations: [AppComponent, InfoPanelComponent, MainContentComponent, IntroductionComponent, ContactComponent, LanguagesComponent, HobbiesComponent, TimelineComponent, ListComponent, IconComponent, TitleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
