import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { SupplierService } from '../../shared/services/supplier/supplier.service';
import { Supplier } from '../../shared/model/supplier/supplier.model';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource = new MatTableDataSource();

  displayedColumns = ['supId', 'supName', 'supAddress', 'supMobNo', 'supMobNo2', 'supPincode', 'update','delete'];

  constructor(private SupplierService: SupplierService, public dialog: MatDialog ) { }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.SupplierService.loadData().subscribe(result => {
      console.log(result);
      this.dataSource = new MatTableDataSource(result);
      // sorting, paginator
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  // add dialog
  onAddDialog() {
    
    let dialogRef = this.dialog.open(AddSupplierComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  showForEdit(sup : Supplier){
    this.SupplierService.selectSupplier = Object.assign({},sup);
    let dialogRef = this.dialog.open(AddSupplierComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }

  forDelete(unit : Supplier){
    if(confirm('Are u sure')==true){
   // this.UnitService.selectUnit=Object.assign({},unit);
    this.SupplierService.Delete(unit).subscribe(x=>{
      this.ngOnInit();
      this.SupplierService.getUnitDataList();

    })
  }
  }

  onDeleteDialog() {
    this.SupplierService.loadData().subscribe(result => {
      console.log(result);  
      this.dataSource = new MatTableDataSource(result);
      // sorting, paginator
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });     
        

  }
}
