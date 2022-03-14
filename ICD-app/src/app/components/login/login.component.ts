import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

     onSubmit(formData: any) {
        if (formData.valid) {
          console.log(formData.value);
          this.authService.signin(
            formData.value.email,
            formData.value.password
          );
 }
  }
}
