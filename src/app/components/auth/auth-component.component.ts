import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule} from '@angular/router';
import { AuthenticationService} from './auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [
    FormsModule, RouterModule
  ],
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrl: './auth-component.css'
})
export class AuthComponent {
  username: string = '';
  password: string = '';

  constructor(private as: AuthenticationService,
              private router: Router
  ) {
  }
  login() {

    console.log(this.password, this.username);
    this.as
      .signIn(this.username, this.password)
      .subscribe({
        next: (data) => {
          localStorage.setItem("access", data.access);
          localStorage.setItem("refresh", data.refresh);
          alert("You have successfully logged in")
          this.router.navigate(['/home']); // Redirect to the 'dashboard' page
          console.log("Login successful!");
        },
        error: (err) => {
          console.error("Login failed:", err);
          if (err.status === 401) {
            alert("Invalid username or password. Please try again.");
          } else if (err.status === 0) {
            alert("Unable to connect to the server. Please check your internet connection.");
          } else {
            alert("An unexpected error occurred. Please try again later.");
          }
        },
      });
    this.password = '';
    this.username = '';
  }


}
