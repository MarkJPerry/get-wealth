import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfoliosListComponent } from './portfolios-list/portfolios-list.component';

export const appRoutes: Routes = [
    { path: 'portfolios', component: PortfoliosListComponent },
    { path: 'welcome', component: WelcomeComponent },
    {
        path: '',
        component: WelcomeComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
