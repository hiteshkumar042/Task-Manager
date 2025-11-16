import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  title = "Task Manager App"

  private cdr = inject(ChangeDetectorRef)

  ngOnInit() {
    setTimeout(() => {
      this.title = "Task Manager App";
      this.cdr.markForCheck()
    }, 2000);

  }
}
