import { Component, OnInit } from '@angular/core';
//import {pdfMake, pdfMakeStatic} from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
//import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {
data:any;
  constructor() { }

  ngOnInit() {
    this.data=  JSON.parse(sessionStorage.getItem('vessel')) ;
  console.log(this.data);
  }

  // generatePdf(){
  //   const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  // this.pd.createPdf(documentDefinition);
  //  }
  

}
