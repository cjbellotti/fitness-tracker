import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('toggle') toggleEvent : EventEmitter<any> = new EventEmitter<any>();
  isAuth : boolean = false;
  authSubcription : Subscription;

  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit() {
    this.authSubcription = this._authService.authChange
      .subscribe(authStatus => {
        console.log(authStatus);
        this.isAuth = authStatus;
      });
  }

  onToggle() {
    this.toggleEvent.emit();
  }

  onLogout() {
    this._authService.logout();
  }

  ngOnDestroy() {
    this.authSubcription.unsubscribe();
  }
}
