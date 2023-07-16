import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './shared/student.service';
import { ListComponent } from './students/list/list.component';
import { CreateComponent } from './students/create/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './students/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
