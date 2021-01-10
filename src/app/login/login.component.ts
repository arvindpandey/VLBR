import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForms: FormGroup;
  constructor( private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      UserName: ['', Validators.required],
      UserPassword: ['', Validators.required],
    });
  }

  LoginSubmit(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    const Values = this.loginForms.value;
    this.route.navigate(['/Home']);
  }

}
