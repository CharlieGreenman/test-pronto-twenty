import { Component } from '@angular/core';

@Component({
  selector: 'test-pronto-twenty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-pronto-twenty';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
