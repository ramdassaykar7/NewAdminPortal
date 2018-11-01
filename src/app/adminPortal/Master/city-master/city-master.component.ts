import { Component, OnInit, ViewChild } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { cityMasterService } from '../../shared/services/master/cityMaster.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { AddcityDataComponent } from './add-city-data/add-city-data.component';
// import { UpdatecityDataComponent } from './update-city-data/update-city-data.component';
// import { cityMasterService } from '../../shared/services/city-master.service';
import { cityMaster } from '../../shared/model/master/city.model';

@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css']
})
export class cityMasterComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;	
  
  dataSource = new MatTableDataSource();
  
  displayedColumns = ['cityId', 'cityName', 'update','delete'];
  //selectcity : cityMaster;
  constructor( private cityService: cityMasterService, public dialog: MatDialog) { }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.cityService.loadData().subscribe(result => {
      console.log(result);
      this.dataSource = new MatTableDataSource(result);
      // sorting, paginator
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  // dialog module
  dialogResult = "";
  // add dialog
  onAddDialog() {
    
    let dialogRef = this.dialog.open(AddcityDataComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  showForEdit(city : cityMaster){
    this.cityService.selectcity = Object.assign({},city);
    let dialogRef = this.dialog.open(AddcityDataComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }

  forDelete(city : cityMaster){
    if(confirm('Are u sure')==true){
   this.cityService.selectcity=Object.assign({},city);
    this.cityService.Delete(city).subscribe(x=>{
      this.ngOnInit();
      this.cityService.getcityDataList();

    })
  }
  }
  // update dialog
  onUpdateDialog() {
    // let dialogRef = this.dialog.open(UpdatecityDataComponent, {
    //   width: '600',
    //   data: 'this text'
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.ngOnInit();
      
    
    // })
  } 
  // delete dialog
  onDeleteDialog() {
    this.cityService.loadData().subscribe(result => {
      console.log(result);  
      this.dataSource = new MatTableDataSource(result);
      // sorting, paginator
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });     
        

  }
}