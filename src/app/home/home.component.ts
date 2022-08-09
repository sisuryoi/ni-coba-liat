import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatFormField } from '@angular/material/form-field';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { HomeModel } from './home.model';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.css']
})

// session comment
// export class HomeComponent implements OnInit {
export class HomeComponent {


  homeModelObj: HomeModel = new HomeModel();
  userData !: any;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav
  iconmat!: MatFormField

  constructor(private observer: BreakpointObserver, private api: ApiService, private router: Router) {

  }
  //session comment
  // logout() {
  //   sessionStorage.clear();
  // }

  // isLogged() {
  //   if (sessionStorage.getItem('name')) {
  //     alert('silahkan login terlebih dahulu');
  //     this.router.navigate(['/login']);
  //   }
  // }

  // userLogged() {
  //   return sessionStorage.getItem('name');
  // }

  // emailLogged() {
  //   return sessionStorage.getItem('email');
  // }



  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  // ngOnInit(): void {
  //   this.isLogged();
  // }
}


