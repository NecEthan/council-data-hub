import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  
  // Analytics data
  totalRecords = 1247;
  activeCouncils = 8;
  dataQuality = 94;
  lastUpdate = new Date();

  // Chart data for different metrics
  councilDataStats = [
    { name: 'Richmond', records: 186, percentage: 15 },
    { name: 'Epsom', records: 142, percentage: 11 },
    { name: 'Kingston', records: 203, percentage: 16 },
    { name: 'Southwark', records: 178, percentage: 14 },
    { name: 'Woking', records: 165, percentage: 13 },
    { name: 'Lambeth', records: 194, percentage: 16 },
    { name: 'H&F', records: 179, percentage: 14 }
  ];

  monthlyTrends = [
    { month: 'Jan', records: 1050 },
    { month: 'Feb', records: 1120 },
    { month: 'Mar', records: 1180 },
    { month: 'Apr', records: 1095 },
    { month: 'May', records: 1205 },
    { month: 'Jun', records: 1247 }
  ];

  dataQualityMetrics = [
    { metric: 'Complete Records', value: 94, color: 'success' },
    { metric: 'Valid Addresses', value: 87, color: 'warning' },
    { metric: 'Recent Updates', value: 92, color: 'success' },
    { metric: 'Data Accuracy', value: 89, color: 'success' }
  ];

  constructor() {}

  getStatusColor(percentage: number): string {
    if (percentage >= 90) return 'success';
    if (percentage >= 70) return 'warning';
    return 'error';
  }

  refreshAnalytics() {
    console.log('Refreshing analytics data...');
    // Simulate data refresh
    this.lastUpdate = new Date();
    // In a real app, you'd fetch fresh data from your service
  }

  exportReport() {
    console.log('Exporting analytics report...');
    // In a real app, you'd generate and download a report
    alert('Analytics report exported successfully!');
  }
}
