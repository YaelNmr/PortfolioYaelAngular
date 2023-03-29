import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { BannerComponent } from './index/banner/banner.component';
import { PresentacionComponent } from './index/presentacion/presentacion.component';
import { ExperienciaComponent } from './index/experiencia/experiencia.component';
import { EducacionComponent } from './index/educacion/educacion.component';
import { HabilidadesComponent } from './index/habilidades/habilidades.component';
import { ProyectosComponent } from './index/proyectos/proyectos.component';
import { FooterComponent } from './index/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormularioComponent } from './login/formulario/formulario.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioregComponent } from './registro/formularioreg/formularioreg.component';
import { PanelComponent } from './panel/panel.component';
import { NavbarpanelComponent } from './panel/navbarpanel/navbarpanel.component';
import { EditorComponent } from './panel/editor/editor.component';





@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    BannerComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    ErrorComponent,
    FormularioComponent,
    RegistroComponent,
    FormularioregComponent,
    PanelComponent,
    NavbarpanelComponent,
    EditorComponent,
   
  
    
 




  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
