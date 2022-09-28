import { TodoService } from './../todo.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  loginForm: FormGroup;

  constructor(
    public router: Router,
    public todo: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit() {
    // this.createForm();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      var userdata = this.todo.userList.filter(
        (x: any) => x.username == this.loginForm.value.username
      );
      if (userdata.length > 0) {
        localStorage.setItem('userdetails', JSON.stringify(userdata[0]));
        this.router.navigateByUrl('/users-todo');
      } else {
        alert(
          'No user with username' +
            ' ' +
            this.loginForm.value.username +
            '' +
            this.router.navigateByUrl('/SignUp')
        );
      }
    } else {
      console.log('There is a problem with the form');
    }
  }
}
