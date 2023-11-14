import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'test-pronto-twenty-global-sidenav',
  templateUrl: './global-sidenav.component.html',
  styleUrls: ['./global-sidenav.component.scss']
})
export class GlobalSidenavComponent {
  events: string[] = [];
  @Input() opened = false;
  @Output() sideNavToggle = new EventEmitter();

  emitSideNavToggle(): void {
    this.sideNavToggle.emit();
  }
    
  constructor() {}
}

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [GlobalSidenavComponent],
  exports: [GlobalSidenavComponent],
})
export class GlobalSidenavModule {}
