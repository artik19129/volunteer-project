import { Component, OnInit } from '@angular/core';
import { showTrigger } from '../../shared/animations/fade.animation';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [showTrigger]
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
