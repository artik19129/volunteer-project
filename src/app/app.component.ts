import { Component } from '@angular/core';
import { ProjectService } from './shared/services/project.service';
import { showTrigger } from './shared/animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [showTrigger]
})
export class AppComponent {
  // tslint:disable-next-line:variable-name
  constructor(public _service: ProjectService) {
  }
}
