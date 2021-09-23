import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-reversal',
  templateUrl: './string-reversal.component.html',
  styleUrls: ['./string-reversal.component.css'],
})
export class StringReversalComponent implements OnInit {
  value: string;
  //reverseString: string;
  //revStr: string;
  reverseOutput: any;
  constructor() {}
  someFunction() {
    let originalValue = this.value;
    let reverseOutput = originalValue.split('').reverse().join('');
    console.log(reverseOutput);
  }
  ngOnInit() {}
}
