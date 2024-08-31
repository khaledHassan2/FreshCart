import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from '../../nav-blank/nav-blank.component';
import { FooterComponent } from '../../footer/footer.component';


@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [NavBlankComponent, RouterOutlet, FooterComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {

}
