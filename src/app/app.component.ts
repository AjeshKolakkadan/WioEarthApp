import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, EnvironmentInjector } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {}

@Component({
  selector: 'orders-list',
  templateUrl: './order-list.html',
})
export class OrderListPage {}

@Component({
  selector: 'orders-detail',
  templateUrl: './order-detail.html',
})
export class OrderDetailPage {
  constructor(public environmentInjector: EnvironmentInjector) {}
  // before
  private route = inject(ActivatedRoute);
  id$ = this.route.params.pipe(map((params) => params['id']));

  // after
  @Input() id: string;
}
