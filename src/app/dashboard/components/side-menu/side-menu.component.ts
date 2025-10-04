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
  
  selectedCouncil: string = 'all';

  constructor() {}

  ngOnInit(): void {
  }

  onClick(website: string) {
    this.selectedCouncil = website;
    this.websiteName.emit(website);
  }

}
