import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [NavigationComponent, HeaderComponent, FooterComponent],
    exports: [NavigationComponent, HeaderComponent, FooterComponent]
})

export class LayoutModule { };