import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'stocks',
        loadChildren: () =>
            import('./features/stocks/stocks.routes').then(m => m.STOCKS_ROUTES),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    },
    {
        path: '',
        redirectTo: 'stocks',
        pathMatch: 'full',
    },
];
