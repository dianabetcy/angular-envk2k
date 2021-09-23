import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-functions',
  templateUrl: './create-functions.component.html',
  styleUrls: ['./create-functions.component.css'],
})
export class CreateFunctionsComponent implements OnInit {
  //funArray: string[];

  constructor() {}

  ngOnInit() {
    let i = 0;
    let divisor = 2;
    let funArray = [96, 55, 82, 40, 33, 39, 42, 96, 60, 15];
    for (i = 0; i < funArray.length; i++) {
      funArray[i] = funArray[i] / divisor;
      var condCheck = funArray.filter(function (x) {
        return x > 30;
      });
    }
    console.log(condCheck);
    let sum = condCheck.reduce((a, b) => a + b, 0);
    console.log(sum);
  }
}
