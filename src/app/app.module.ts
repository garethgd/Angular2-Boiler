
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from './layout/layout.module';
import { FooterComponent } from './layout/footer/footer.component';
import { WhiskeysModule } from './whiskeys/whiskeys.module';
import { ActionsModule } from './actions/actions.module';
import { AppRoutingModule } from './app.routing';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
   
    LoginModalComponent, 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AlertModule,
    LayoutModule,
    WhiskeysModule,
    ActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
