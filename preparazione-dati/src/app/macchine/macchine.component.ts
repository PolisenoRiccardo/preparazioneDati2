import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-macchine',
  templateUrl: './macchine.component.html',
  styleUrls: ['./macchine.component.css']
})
export class MacchineComponent implements OnInit {
@Input() macchina:string;
  constructor () {
    this.macchina = ''
  }
  ngOnInit () {}
}
