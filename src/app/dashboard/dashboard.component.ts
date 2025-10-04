import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { ResultsDataComponent } from './components/results-data/results-data.component';
import { ScrapedService } from './components/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideMenuComponent, ResultsDataComponent, DecimalPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  public scrapedData = [];

  constructor(private scrapedService: ScrapedService) {}

  ngOnInit(): void {
    
  }

  onClick(websiteName: any) {

    if (websiteName === 'all') {
      const results = this.scrapedService.getScrapedData();
      results.subscribe({
        next: (res) => {
          this.scrapedData = res
          console.log(res)
        }
      })
    }

    const results = this.scrapedService.getScrapedDataByName(websiteName);
    results.subscribe({
      next: (res) => {
        for (let i=0; i < res.length; i++) {
          let rawDate = res[i].date;
          let parsedDate = new Date('20' + rawDate.split('/').reverse().join('-'));
          res[i].date = parsedDate;
        }
     
        this.scrapedData = res

      }
    })
  }

  getLastUpdateTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

}
