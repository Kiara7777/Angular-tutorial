import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  renderPage: number = 1;

  navigation(page: number): void {
    this.renderPage = page;
  }
}
