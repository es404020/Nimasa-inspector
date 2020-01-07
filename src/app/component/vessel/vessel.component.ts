import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VesselsService } from 'src/app/core/service/vessels.service';
import swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { ButtonRendererComponent } from './button-renderer.component';
@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.css']
})
export class VesselComponent implements OnInit {
  title:String= 'Vessels';
  private gridApi;
  private gridColumnApi;
  private frameworkComponents;
 flag:any;
  VesselForm: FormGroup;
  isLoading:boolean;
  vesselArray=[];
  columnDefs;
  rowData;
  private defaultColDef;
  private colResizeDefault;
  constructor(private _fb:FormBuilder,private _vsevice:VesselsService,private sanitizer: DomSanitizer) { }
//NameOfVessel RegDate
  ngOnInit() {
    this.defaultColDef = { resizable: true };
    this.colResizeDefault = "shift";
    this.frameworkComponents = {
      buttonRenderer:   ButtonRendererComponent,
    }
    this.columnDefs =  [
      {headerName: 'Vessel Name', field: 'NameOfVessel' ,colId: "firstCol",},
      {headerName: 'IMO', field: 'IMO' },
      
      {headerName: 'Cargo Measurent', field: 'CargoMeasurent',colId: "firstCol",},
      {headerName: 'Regeristration Date', field: 'RegDate',colId: "firstCol",},
    //  {headerName: 'GT', field: 'GT'},
      {
        headerName: 'Action',
        colId: "firstCol",
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onBtnClick1.bind(this),
          label: 'View More',
        
        }
      },
  ];

    this._vsevice.getAllVesssel().subscribe((res:any)=>{
      console.log(res);
      this.rowData=res;
    })

 this.isLoading = false;
    this.VesselForm = this._fb.group({
      'OfficalNo': ['',[Validators.required,Validators.minLength(1)]]
    });
  }

  SearchVessel(){
 this.isLoading = true;
    this._vsevice.findVessselById(this.VesselForm.value.OfficalNo).

    pipe(
      shareReplay(60)
    )
    .subscribe((res:any)=>{
      this.isLoading = false;
    if(res.length==0){
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'No record found....',
        showConfirmButton: false,
        timer: 4500
       })
    }
    else{
      this.vesselArray = res;
      this.flag = res[0].FLAG.split(",")[0];

      console.log(this.flag)
    }
    },(err)=>{
      console.log(err);
      swal.fire({
        position: 'center',
        type: 'error',
        title: 'Something went wrong',
        showConfirmButton: false,
        timer: 9500
       })
    })

  }



  onBtnClick1(e) {
    
    console.log(e);
      }

      onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    
        params.api.sizeColumnsToFit();
      }

}
