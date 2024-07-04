import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    TasksModule,
    SharedModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
