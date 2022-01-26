import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private toast: HotToastService, public readonly router: Router) {
  }

  ngOnInit(): void {
  }

  public onClickIsDEV() {
    this.toast.error('Функция в разработке!');
  }
}
