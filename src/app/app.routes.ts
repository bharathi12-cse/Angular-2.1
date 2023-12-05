import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';

import { boxmealscomponent } from './boxmeals/boxmeals.component';
import { burgercomponent } from './burger/burger.component';
import { chickencomponent } from './chicken/chicken.component';
import { snakscomponent } from './snaks/snaks.component';
import { beveragecomponent } from './beverage/beverage.component';

export const routes: Routes = [
    {path:"",component:MainpageComponent},
    {path:"home",component:MainpageComponent},
    {path:"beverage",component:beveragecomponent},
    {path:"boxmeals",component:boxmealscomponent},
    {path:"burger",component:burgercomponent},
    {path:"chicken",component:chickencomponent},
    {path:"snaks",component:snakscomponent},
    


];

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})
    ],
    exports:[RouterModule],
    declarations:[]
})
export class RoutingModule{}
