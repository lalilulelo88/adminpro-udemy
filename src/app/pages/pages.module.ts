import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

//modulos
import { SharedModule } from '../shared/shared.module';
import { PagesRoutes } from './pages.routes';

@NgModule({
    declarations:[ 
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
        
    ],
    exports:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        
    ],
    imports:[
        SharedModule,
        PagesRoutes
    ]
})

export class PagesModule{}