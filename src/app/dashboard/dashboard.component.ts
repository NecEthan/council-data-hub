import { Component, OnInit } from '@angular/core';
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { ResultsDataComponent } from './components/results-data/results-data.component';
import { ScrapedService } from './components/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideMenuComponent, ResultsDataComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  public scrapedData = [];

  constructor(private scrapedService: ScrapedService) {}

  ngOnInit(): void {
    
  }

  onClick(websiteName: any) {
    const results = this.scrapedService.getScrapedDataByName(websiteName);
    results.subscribe({
      next: (res) => {
        this.scrapedData = res
      }
    })
  }

}
