import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainercentralComponent } from './containercentral/containercentral.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContenidoproyectosComponent } from './contenidoproyectos/contenidoproyectos.component';
import { FooterComponent } from './footer/footer.component';
import { HablemosComponent } from './hablemos/hablemos.component';
import { MapaComponent } from './mapa/mapa.component';

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'hablemos',
    component: HablemosComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainercentralComponent,
    ProyectosComponent,
    HomeComponent,
    ContenidoproyectosComponent,
    FooterComponent,
    HablemosComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDImZnDQlQAHpSUHAu9JqL__WD7LOKAVNg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
