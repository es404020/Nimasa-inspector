import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VesselsService } from 'src/app/core/service/vessels.service';
import swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from 'src/app/core/shared/shared.service';
import { Router } from '@angular/router';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { ButtonRendererComponent } from './button-renderer.component';
@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.css']
})
export class VesselComponent implements OnInit {
  title:String= 'Vessels';
  private frameworkComponents;
 flag:any;
  VesselForm: FormGroup;
  isLoading:boolean;
  vesselArray=[];
  columnDefs;
  rowData;
  constructor(private router:Router,private _fb:FormBuilder,private _vsevice:VesselsService,private sanitizer: DomSanitizer,private _shared:SharedService) { }
//NameOfVessel RegDate
  ngOnInit() {

    this.frameworkComponents = {
      buttonRenderer:   ButtonRendererComponent,
    }
    this.columnDefs =  [
      {headerName: 'Vessel Name', field: 'NameOfVessel' },
      {headerName: 'IMO', field: 'IMO' },
      
      {headerName: 'Cargo Measurent', field: 'CargoMeasurent'},
      {headerName: 'Regeristration Date', field: 'RegDate'},
      {
        headerName: 'Action',
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

  detailsPage(info){

    this._shared.AddVesselInfo(info);
    this.router.navigate(['home/info'])

  }

  onBtnClick1(e) {
    console.log(e);
      }

}
