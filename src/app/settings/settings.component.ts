import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  // User Settings
  userSettings = {
    name: 'Admin User',
    email: 'admin@councildatahub.com',
    role: 'Data Analyst'
  };

  // Data Sources
  dataSources = [
    { name: 'Richmond Council API', status: 'active', lastSync: '2025-10-04 09:30' },
    { name: 'Epsom Council API', status: 'active', lastSync: '2025-10-04 09:25' },
    { name: 'Kingston Council API', status: 'inactive', lastSync: '2025-10-03 14:20' },
    { name: 'Southwark Council API', status: 'active', lastSync: '2025-10-04 09:28' },
    { name: 'Woking Council API', status: 'active', lastSync: '2025-10-04 09:32' },
    { name: 'H&F Council API', status: 'active', lastSync: '2025-10-04 09:35' }
  ];

  constructor() {}

  onSaveSettings() {
    // Implement save functionality
    console.log('Settings saved:', {
      user: this.userSettings
    });
    
    // Show success message (in a real app, you'd use a toast/snackbar service)
    alert('Settings saved successfully!');
  }

  onResetSettings() {
    // Reset to defaults
    if (confirm('Are you sure you want to reset all settings to defaults?')) {
      // Reset logic here
      console.log('Settings reset to defaults');
    }
  }

  onTestConnection(sourceName: string) {
    console.log('Testing connection for:', sourceName);
    // Implement connection test
    alert(`Testing connection to ${sourceName}...`);
  }

  onSyncData(sourceName: string) {
    console.log('Manual sync for:', sourceName);
    // Implement manual sync
    alert(`Syncing data from ${sourceName}...`);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'warning';
      case 'error': return 'error';
      default: return 'default';
    }
  }
}