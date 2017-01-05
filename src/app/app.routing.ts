import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [


    {
        path: 'profile',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    // {
    //     path: '**',
    //     component: NotFoundComponent
    // }

]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }