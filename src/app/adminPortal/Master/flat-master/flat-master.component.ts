import { Component, OnInit, ViewChild } from '@angular/core';
import { FlatMasterService } from '../../shared/services/master/flat-master.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AddFlatComponent } from './add-flat/add-flat.component';
import { FlatMaster } from '../../shared/model/master/flat-master.model';

@Component({
  selector: 'app-flat-master',
  templateUrl: './flat-master.component.html',
  styleUrls: ['./flat-master.component.css']
})
export class FlatMasterComponent implements OnInit {
  constructor(private flatmasterservice: FlatMasterService,  public dialog: MatDialog) { }
  displayedColumns = ['flatId', 'flatNo', 'society','update', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.flatmasterservice.loadData().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  onAddDialog() {
    let dialogRef = this.dialog.open(AddFlatComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onUpdateDialog(item: FlatMaster) {
    this.flatmasterservice.selectFlat = Object.assign({}, item);
    let dialogRef = this.dialog.open(AddFlatComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onDeleteDialog(item: FlatMaster) {
  
    if (confirm('Are u sure') == true) {
      this.flatmasterservice.Delete(item).subscribe(x => {
        this.ngOnInit();
        this.flatmasterservice.getFlatDataList();
      })
    }
  }
}
