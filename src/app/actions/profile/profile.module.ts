import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from '../profile/profile.component'

@NgModule({
        imports: [BrowserModule, FormsModule],
        declarations: [ProfileComponent]
    }
)

export class UsersModule {}