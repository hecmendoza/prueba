import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  durationInSeconds = 5;
  loading = false;

  form = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 2000});
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'admin' && password == 'admin'){
      localStorage.setItem("user", "admin");
      localStorage.setItem("pass", "admin");
      
      this.loading = true;
      this.redirect();
    }else{
      this.openSnackBar('usuario no valido', 'Error');
    }
  }

  redirect(){
    this.router.navigate(['home']);
  }

}