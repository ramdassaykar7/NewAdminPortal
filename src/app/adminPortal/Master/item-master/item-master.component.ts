import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ItemMasterService } from '../../shared/services/master/item-master.service';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemMaster } from '../../shared/model/master/item.model';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {
  constructor(private itemmasterservice: ItemMasterService,  public dialog: MatDialog) { }
  displayedColumns = ['itemId', 'itemName', 'itemQuantity','itemPrice','unit','type','update', 'delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.itemmasterservice.loadData().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  dialogResult = "";
  onAddDialog() {
    let dialogRef = this.dialog.open(AddItemComponent, {
      width: '600',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onUpdateDialog(item: ItemMaster) {
    this.itemmasterservice.selectItem = Object.assign({}, item);
    let dialogRef = this.dialog.open(AddItemComponent, {
      width: '900',
      data: 'this text'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('dialog closed: ${result}');
      this.dialogResult = result;
    })
  }
  onDeleteDialog(item: ItemMaster) {
  
    if (confirm('Are u sure') == true) {
      this.itemmasterservice.Delete(item).subscribe(x => {
        this.ngOnInit();
        this.itemmasterservice.getItemDataList();
      })
    }
  }
}
