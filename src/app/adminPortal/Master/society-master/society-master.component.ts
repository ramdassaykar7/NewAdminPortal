import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SocietyMaster } from '../../shared/model/master/society-master';
import { SocietyMasterService } from '../../shared/services/master/society-master.service';
import { AddSocietyComponent } from './add-society/add-society.component';
// import { AddSocietyComponent } from './add-type/add-type.component';
@Component({
  selector: 'app-society-master',
  templateUrl: './society-master.component.html',
  styleUrls: ['./society-master.component.css']
})
export class SocietyMasterComponent implements OnInit {

  constructor(private societymasterservice:  SocietyMasterService,  public dialog: MatDialog) { }
  displayedColumns = ['societyId','societyName','area', 'update', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.societymasterservice.loadData().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  onAddDialog() {
    this.societymasterservice.selectSociety = null;
    let dialogRef = this.dialog.open(AddSocietyComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onUpdateDialog(item: SocietyMaster) {
    this.societymasterservice.selectSociety = Object.assign({}, item);
    let dialogRef = this.dialog.open(AddSocietyComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onDeleteDialog(item: SocietyMaster) {
    if (confirm('Are u sure') == true) {
      this.societymasterservice.Delete(item).subscribe(x => {
        this.ngOnInit();
        this.societymasterservice.getSocietyDataList();
      })
    }
  }

}
