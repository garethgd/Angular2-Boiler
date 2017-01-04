
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

import { LoginModalComponent } from './login-modal/login-modal.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const rootRouting : ModuleWithProviders = RouterModule.forRoot([
{
  path: '',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'profile',
  component: ProfileComponent
}
], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    LayoutModule,
    WhiskeysModule,
    ActionsModule,
    LoginModalComponent, 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    rootRouting,
    RouterModule.forRoot(
      [
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'profile',
          component: ProfileComponent
        }
        ,
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: '**',
          component: NotFoundComponent
        }

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
