import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { TypeMasterService } from '../../shared/services/master/type-master.service';
import { TypeMaster } from '../../shared/model/master/type-master';
import { AddTypeComponent } from './add-type/add-type.component';
@Component({
  selector: 'app-type-master',
  templateUrl: './type-master.component.html',
  styleUrls: ['./type-master.component.css']
})
export class TypeMasterComponent implements OnInit {

 

  constructor(private typemasterservice:  TypeMasterService,  public dialog: MatDialog) { }
  displayedColumns = ['typeId','typeName', 'typeDescription', 'update', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.typemasterservice.loadData().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  onAddDialog() {
    let dialogRef = this.dialog.open(AddTypeComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onUpdateDialog(item: TypeMaster) {
    this.typemasterservice.selectType = Object.assign({}, item);
    let dialogRef = this.dialog.open(AddTypeComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onDeleteDialog(item: TypeMaster) {
    if (confirm('Are u sure') == true) {
      this.typemasterservice.Delete(item).subscribe(x => {
        this.ngOnInit();
        this.typemasterservice.getTypeDataList();
      })
    }
  }

}
