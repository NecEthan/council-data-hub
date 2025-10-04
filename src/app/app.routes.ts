import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes').then(mod => mod.DASHBOARD_ROUTES) },
    { path: 'analytics', loadComponent: () => import('./analytics/analytics.component').then(c => c.AnalyticsComponent) },
    { path: 'settings', loadComponent: () => import('./settings/settings.component').then(c => c.SettingsComponent) },
];
