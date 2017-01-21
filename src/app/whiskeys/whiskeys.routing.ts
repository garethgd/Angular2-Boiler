import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WhiskeyListComponent } from '././whiskey-list/whiskey-list.component';


const routes: Routes = [

    {
        path: 'whiskeys',
        component: WhiskeyListComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WhiskeysRoutingModule { }




