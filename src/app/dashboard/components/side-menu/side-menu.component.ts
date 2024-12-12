import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ScrapedService } from '../dashboard.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  @Output() websiteName = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onClick(website: string) {
    this.websiteName.emit(website)
  }


}
