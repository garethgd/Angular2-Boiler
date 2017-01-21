import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ActionsRoutingModule } from './actions.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, ActionsRoutingModule],
    declarations: [LoginComponent, RegisterComponent, ProfileComponent ],
    exports: [LoginComponent, RegisterComponent, ProfileComponent ]
})

export class ActionsModule { }

