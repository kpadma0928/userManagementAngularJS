import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  @Input() user: any;
  sub: any;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.userService.get(id).subscribe(user => this.user = user);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToUsersList(){
    this.router.navigate(['/users']);
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe(user => console.log(`Updated..... ${JSON.stringify(this.user)}`))
  }


  

}
