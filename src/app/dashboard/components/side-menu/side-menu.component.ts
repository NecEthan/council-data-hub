import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrapedService } from '../dashboard.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  @Output() websiteName = new EventEmitter();
  
  selectedCouncil: string = 'all';
  searchTerm: string = '';

  // Complete list of all councils
  allCouncils = [
    { id: 'all', name: 'All Councils', displayName: 'All Councils', count: 8 },
    { id: 'richmond', name: 'richmond', displayName: 'Richmond', count: null },
    { id: 'epsom', name: 'epsom', displayName: 'Epsom', count: null },
    { id: 'kingston', name: 'kingston', displayName: 'Kingston', count: null },
    { id: 'southwark', name: 'southwark', displayName: 'Southwark', count: null },
    { id: 'woking', name: 'woking', displayName: 'Woking', count: null },
    { id: 'lambeth', name: 'lambeth', displayName: 'Lambeth', count: null },
    { id: 'hl', name: 'hl', displayName: 'Hammersmith & Fulham', count: null }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  onClick(website: string) {
    this.selectedCouncil = website;
    this.websiteName.emit(website);
  }

  // Filter councils based on search term
  get filteredCouncils() {
    if (!this.searchTerm) {
      return this.allCouncils;
    }
    
    return this.allCouncils.filter(council => 
      council.displayName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Handle search input
  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }

  // Clear search
  clearSearch() {
    this.searchTerm = '';
  }

}
