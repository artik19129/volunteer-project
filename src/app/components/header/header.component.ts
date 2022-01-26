import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public _service: ProjectService,
    private toast: HotToastService,
    public readonly router: Router) {
  }

  ngOnInit(): void {
  }

  public onClickIsDEV() {
    this.toast.error('В данный момент функция недоступна!');
  }

}
