import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  isAuth : boolean = false;
  authSubscription : Subscription;

  @Output('toggle') toggleEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit() {
    this.authSubscription = this._authService.authChange
      .subscribe(authStatus => {
        this.isAuth = authStatus
      });
  }

  onToggle() {
    this.toggleEvent.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
