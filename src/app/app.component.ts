import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = 'init';

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getData().subscribe(response => {
      console.log("Response data: " + response);
      this.data = response;
    });
  }
}
