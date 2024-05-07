import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'createUser',
    loadChildren: () => import('./features/create-user/create-user.module').then(m => m.CreateUserModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'earComparator',
    loadChildren: () => import('./ear-comparator/ear-comparator.module').then(m => m.EarComparatorModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'scriptTransformer',
    loadChildren: () => import('./script-transformer/script-transformer.module').then(m => m.ScriptTransformerModule),
    canActivate: [AuthGuard]
  },  {
    path: 'simulerScript',
    loadChildren: () => import('./simuler-script/simuler-script.module').then(m => m.SimulerScriptModule),
    canActivate: [AuthGuard]
  },
   {
    path: 'historiqueSimulation',
    loadChildren: () => import('./afficher-historique-simulations/afficher-historique-simulations.module').then(m => m.AfficherHistoriqueSimulationsModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'update',
    loadChildren: () => import('./update-user/update-user.module').then(m => m.UpdateUserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'icons',
    loadChildren: () => import('./features/icons/icons.module').then(m => m.IconsModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
