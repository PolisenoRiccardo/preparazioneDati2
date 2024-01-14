import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-macchine',
  templateUrl: './macchine.component.html',
  styleUrls: ['./macchine.component.css']
})
export class MacchineComponent implements OnInit {
@Input() macchina:string;
pezzi: string[];
  constructor () {
    this.macchina = ''
    this.pezzi = ['Vite Piccola', 'Vite Media','Vite Grande']
  }
  ngOnInit () {}
}
