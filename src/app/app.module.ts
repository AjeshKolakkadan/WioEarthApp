import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent, OrderDetailPage, OrderListPage } from './app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    children: [
      {
        path: '',
        component: OrderListPage,
      },
      {
        path: ':id',
        component: OrderDetailPage,
      },
    ],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, {
      //... other features
      bindToComponentInputs: true, // <-- enable this feature
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  declarations: [AppComponent, OrderDetailPage, OrderListPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
