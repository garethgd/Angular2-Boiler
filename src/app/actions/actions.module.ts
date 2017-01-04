

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [BrowserModule, FormsModule];
    declarations: [LoginComponent, RegisterComponent]
})

export class ActionsModule { }

