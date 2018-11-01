import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { AreaMasterService } from '../../shared/services/master/area-master.service';
import { AreaMaster } from '../../shared/model/master/area-master';
import { AddAreaComponent } from './add-area/add-area.component';
@Component({
  selector: 'app-area-master',
  templateUrl: './area-master.component.html',
  styleUrls: ['./area-master.component.css']
})
export class AreaMasterComponent implements OnInit {

  constructor(private areamasterservice:  AreaMasterService,  public dialog: MatDialog) { }
  displayedColumns = ['areaId','areaName','city', 'update', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.areamasterservice.loadData().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  onAddDialog() {
    this.areamasterservice.selectArea =null;
    let dialogRef = this.dialog.open(AddAreaComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onUpdateDialog(item: AreaMaster) {
    this.areamasterservice.selectArea = Object.assign({}, item);
    let dialogRef = this.dialog.open(AddAreaComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onDeleteDialog(item: AreaMaster) {
    if (confirm('Are u sure') == true) {
      this.areamasterservice.Delete(item).subscribe(x => {
        this.ngOnInit();
        this.areamasterservice.getAreaDataList();
      })
    }
  }

}
