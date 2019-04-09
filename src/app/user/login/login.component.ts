import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  // public goToRegister: any = () => {

  //   this.router.navigate(['/register']);

  // }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
