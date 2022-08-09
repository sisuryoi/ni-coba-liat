import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // hide = true;
  public loginForm !: FormGroup
  typepass: any = 'password'
  icon: any = 'visibility'
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  login() {
    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res => {
        const user = res.find((a: any) => {

          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
          sessionStorage.setItem("fullname", user.fullname);
          sessionStorage.setItem("email", user.email);
          alert("Selamat Datang Kembali!");
          this.loginForm.reset();
          this.router.navigate(['home']);
        } else {
          alert("Pengguna tidak ditemukan!");
        }
      }, err => {
        alert("Ada yang salah:(")
      })


  }
  showpassword() {
    if (this.typepass == 'password') {
      this.typepass = "text"
      this.icon = 'visibility_off'
    } else {
      this.typepass = 'password'
      this.icon = 'visibility'
    }
  }
}
