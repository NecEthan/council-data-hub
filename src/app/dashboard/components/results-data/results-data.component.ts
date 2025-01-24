import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IScrapedData } from '../../interfaces/scrapedData.interface';
import { filter } from 'rxjs';

@Component({
  selector: 'app-results-data',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, FormsModule],
  templateUrl: './results-data.component.html',
  styleUrls: ['./results-data.component.css']
})
export class ResultsDataComponent implements OnInit, OnChanges {
  @Input() scrapedData?: IScrapedData[];

  displayedColumns: string[] = ['id', 'websiteName', 'name', 'address', 'date'];

  dataSource!: MatTableDataSource<any>;
  selectedStartDate = '';
  selectedEndDate = '';

  constructor() {}

  ngOnInit(): void {
    this.initializeDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['scrapedData'] && changes['scrapedData'].currentValue) {
      this.initializeDataSource();
    }
  }

  private initializeDataSource() {
    // Ensure that data is available before initializing the dataSource
    if (this.scrapedData) {
      this.dataSource = new MatTableDataSource(this.scrapedData);
    }
  }

  onDateClick() {
    console.log(this.selectedStartDate)
    console.log(this.selectedEndDate)
  }

  onSubmitDate() {
    
    const filteredData = this.scrapedData?.filter((row) => {
      const rowDate = new Date(row.date);
      const startDate = new Date(this.selectedStartDate);
      const endDate = new Date(this.selectedEndDate);
  
      return rowDate > startDate && rowDate < endDate;
    });

    console.log(filteredData)
    this.dataSource = new MatTableDataSource(filteredData);

  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}
