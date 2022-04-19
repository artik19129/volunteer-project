import { Component, Inject, OnInit } from '@angular/core';
import { showTrigger } from '../../shared/animations/fade.animation';
import { ProjectService } from '../../shared/services/project.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [showTrigger]
})
export class ModalComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(public _service: ProjectService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }


  public close(): void {
    this._service.isModalOpen = false;
    this.document.body.style.overflow = 'auto';
  }

}
