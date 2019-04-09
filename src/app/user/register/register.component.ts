import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public email: any;
  public password: any;


  constructor(public router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  //   public goToLogin: any = () => {

  //   this.router.navigate(['/login']);

  // }

  public signupFunction: any = () => {

      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password

      };
      console.log(data);

    }
}
