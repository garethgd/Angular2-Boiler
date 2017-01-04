
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { WhiskeyListComponent } from './whiskey-list/whiskey-list.component';
import { WhiskeyFeaturesComponent } from './whiskey-features/whiskey-features.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RouterModule } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';


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
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    WhiskeyListComponent,
    WhiskeyFeaturesComponent,
    LoginComponent,
    RegisterComponent,
    LoginModalComponent,
    ProfileComponent,
    MyNewComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
   
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
