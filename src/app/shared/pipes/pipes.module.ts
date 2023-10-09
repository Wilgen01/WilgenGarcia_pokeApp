import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pagination/pagination.pipe';



@NgModule({
  declarations: [
    PaginationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationPipe
  ]
})
export class PipesModule { }
