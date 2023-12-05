import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from "./mainpage/mainpage.component";
import { TopnavComponent } from "./topnav/topnav.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { beveragecomponent } from "./beverage/beverage.component";
import { boxmealscomponent } from "./boxmeals/boxmeals.component";
import { burgercomponent } from "./burger/burger.component";
import { chickencomponent } from "./chicken/chicken.component";
import { kfcchickencomponent } from "./kfcchicken/kfcchicken.component";
import { snakscomponent } from "./snaks/snaks.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, beveragecomponent, boxmealscomponent, burgercomponent, chickencomponent, kfcchickencomponent, snakscomponent, SidenavComponent, TopnavComponent, MainpageComponent]
})
export class AppComponent {
  title = 'myApp';
}
