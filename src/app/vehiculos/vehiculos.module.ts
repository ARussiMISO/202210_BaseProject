import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListarVehiculosComponent],
  declarations: [ListarVehiculosComponent]
})
export class VehiculosModule { }
