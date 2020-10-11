import { Component, OnInit } from '@angular/core';
import { Util } from "../util/Util";

interface MyInterface {
  thing1: string;
  thing2: number;
}

@Component({
  selector: 'app-countertwo',
  templateUrl: './countertwo.component.html',
  styleUrls: ['./countertwo.component.css']
})
export class CountertwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let x: MyInterface = {
      thing1: "asd",
      thing2: 12
    }
    Util.doThing("as da sd".split(" ").reverse().join(" "));
  }

}
