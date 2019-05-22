import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = 'no data';
  dataInput = '';

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getData().subscribe(response => {
      console.log("Response data: " + JSON.stringify(response));
      this.data = response.content;
    });
  }

  addData(){
    this._appService.addData(this.dataInput).subscribe(response=>{
      console.log("Data Added"+ JSON.stringify(response));
      this.data = response.content;
    })
  }
}
