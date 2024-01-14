import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
machines: string[];
constructor() {
  this.machines = ['uno', 'due','tre','quattro','cinque','sei','sette','otto','nove','dieci']
} ngOnInit() {}
}
