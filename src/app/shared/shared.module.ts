import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
// import { SideMenuComponent } from './component/side-menu/side-menu.component';
// import { TopMenuComponent } from './component/top-menu/top-menu.component';

@NgModule({
  declarations: [
    // TopMenuComponent
  // SideMenuComponent
],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
