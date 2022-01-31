import { Component, Inject, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { ProjectService } from '../../../shared/services/project.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private toast: HotToastService, public readonly router: Router, public _service: ProjectService, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
  }

  public test() {
    this._service.isModalOpen = !this._service.isModalOpen;

    if (this._service.isModalOpen) {
      this.document.body.style.overflow = 'hidden';
    } else this.document.body.style.overflow = 'auto';
  }

  public onClickIsDEV() {
    this.toast.error('Функция в разработке!');
  }
}
