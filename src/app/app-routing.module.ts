import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LisUserComponent } from './lis-user/lis-user.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'products', component: ListProductComponent},
  {path:'users', component: LisUserComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
