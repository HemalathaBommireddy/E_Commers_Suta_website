import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public data={
    
    UserName: '',
    Email : '',
    Password : '',
    ConformPassword : ''
  }

  valid = {
    UserName: true,
    Email: true,
    Password: true,
    ConformPassword:true,
    PhoneNumber:true
  };
  constructor() { }

  ngOnInit(): void {
  }
  validate(type: string): void {
    const usernamePattern = /^[a-zA-Z]+$/;
    const emailPattern = /\S+@\S+\.\S+/;

    if (type === 'UserName') {
      if (this.data.UserName.length < 5) {
        this.valid.UserName = false;
      } else {
        this.valid.UserName = usernamePattern.test(this.data.UserName);
      }
    } else if (type === 'Email') {
      this.valid.Email = emailPattern.test(this.data.Email);
    } else if (type === ('conformPassword' || 'Password')) {
      if (this.data.Password === this.data.ConformPassword) {
        this.valid.Password = true;
      } else {
        this.valid.Password = false;
      }
    }
  }

  onkey(event: any, type: string) {
    if (type === 'UserName') {
      this.data.UserName = event.target.value;
    } else if (type === 'Email') {
      this.data.Email = event.target.value;
    } else if (type === 'Password') {
      this.data.Password = event.target.value;
    } else if (type === 'ConformPassword') {
      this.data.ConformPassword = event.target.value;
    }
    this.validate(type);
  }


   
  }

  

  

