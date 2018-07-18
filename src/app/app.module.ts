import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfoliosListComponent } from './portfolios-list/portfolios-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        PortfoliosListComponent
    ],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
