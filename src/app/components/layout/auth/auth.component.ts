import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavAuthComponent } from '../../nav-auth/nav-auth.component';
import { FooterComponent } from '../../footer/footer.component';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NavAuthComponent, RouterOutlet, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
