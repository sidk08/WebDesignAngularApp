import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

  @Output('childEvent') childEmitter = new EventEmitter<String>()

  constructor() { }

  ngOnInit() {
  }

  clickFunc(textIp: HTMLInputElement){

      this.childEmitter.emit(textIp.value);
      textIp.value='';
  }

}
