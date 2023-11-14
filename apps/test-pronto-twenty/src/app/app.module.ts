import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@test-pronto-twenty/common/ui";
import { GlobalFooterModule } from "@test-pronto-twenty/common/ui";
import { GlobalSidenavModule } from "@test-pronto-twenty/common/ui";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
