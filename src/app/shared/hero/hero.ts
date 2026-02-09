import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Input() titulo!: string;
  @Input() txt1! : string;
  @Input() txt2! : string;
}
