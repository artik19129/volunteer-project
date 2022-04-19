import { animate, style, transition, trigger } from "@angular/animations";

export const showTrigger = trigger('onShow', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(200)
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ opacity: 0 })),
  ])
]);
