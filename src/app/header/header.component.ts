import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  @Output() parentNavigation: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  navigation(page: number): void {
    this.parentNavigation.emit(page);
  }
}
