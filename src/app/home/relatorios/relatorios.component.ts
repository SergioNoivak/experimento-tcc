import { Component, OnInit } from '@angular/core';
import { RedeSmallworld } from '../../core/classes/RedeSmallWorld';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  constructor() {

    let rede = new RedeSmallworld(100,3,15,0.1,new Array(100))
    console.log(rede)
  }

  ngOnInit(): void {
  }

}
