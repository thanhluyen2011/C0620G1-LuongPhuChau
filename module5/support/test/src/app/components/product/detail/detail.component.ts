import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public formView;

  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.formView = {
      idFormat: this.data.dataNeed.idFormat,
      name: this.data.dataNeed.name,
      price: this.data.dataNeed.price,
      startDate: this.data.dataNeed.startDate,
      endDate: this.data.dataNeed.endDate,
      birthDay: this.data.dataNeed.birthDay,
      type: this.data.dataNeed.type.name
    }
  }

  closeDialog() {
    // this.router.navigateByUrl('list').then(_ => {
    // });
    this.dialogRef.close();
  }
}
