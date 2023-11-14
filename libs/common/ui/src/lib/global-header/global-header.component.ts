import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatButtonModule } from '@angular/material/button';
import { faBell, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'test-pronto-twenty-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent implements OnInit {
  faUserCircle = faUserCircle;
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;
  @Output() sideNavToggle: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitSideNavToggle() {
    this.sideNavToggle.emit();
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  declarations: [GlobalHeaderComponent],
  exports: [GlobalHeaderComponent],
})
export class GlobalHeaderComponentModule {}
