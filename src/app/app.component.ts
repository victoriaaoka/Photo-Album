import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  httpdata;
  ngOnInit() {
    this.http.get("https://api.unsplash.com/photos/?client_id=ef4edec5249da190641f94de3e099d61bb8be002e8056471b83d87065c2a212d")
      .subscribe(data => this.displaydata(data))
  }
  displaydata(data) {
    this.httpdata = data;
    console.log(data);
  }
}

