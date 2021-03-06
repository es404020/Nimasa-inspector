import { Component, OnInit } from '@angular/core';
//import {pdfMake, pdfMakeStatic} from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
//import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as jspdf from 'jspdf';  
import { SharedService } from 'src/app/core/shared/shared.service';
  
import html2canvas from 'html2canvas';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {
data:any;
vesselinfo:any;
  constructor(private _service:SharedService,private router:Router) { }

  ngOnInit() {
   // console.log(JSON.parse(sessionStorage.getItem('info')));
    this.data=  JSON.parse(sessionStorage.getItem('vessel')) ;
  console.log(this.data);

  this._service.getVesselInfo().subscribe((res)=>{
    console.log(res);
    if(res ==null){
      this.router.navigate(['home/vessels'])
    }
    this.vesselinfo = res;
  })

  }

  // generatePdf(){
  //   const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  // this.pd.createPdf(documentDefinition);
  //  }
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 255;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(`${this.data.dates}.pdf`); // Generated PDF   
    });  
  }  

}
