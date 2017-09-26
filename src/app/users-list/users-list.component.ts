import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/ng2-bootstrap'
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html' ,
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any = [];
  selectedUser: User;
  errorMessage : String = "";
  isNewRecord: boolean;
  user: User;
  selUser :{};
  statusMessage: String= "";
  public modalRef: BsModalRef;
  constructor(private userService: UserService, private bsModalService: BsModalService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getAllUsers().subscribe(
      users => this.users = users,
      err => this.errorMessage = err
      );
  }

  newUser(template){
    this.isNewRecord = true;
    this.user = new User(0, '','','', '');
    this.modalRef = this.bsModalService.show(template)
  }

  selectUser(template, user: User){
    this.user = user;
    this.modalRef = this.bsModalService.show(template)
  }

  saveUser(userData){
    if(this.isNewRecord){
      this.userService.createUser(userData).subscribe(user =>{
          this.user = user,
          this.statusMessage = "User Created Successfully",
          this.loadUsers();
        }
      )
      this.isNewRecord =false;
    } else {
      this.userService.updateUser(this.user).subscribe(user => {
        this.statusMessage = "User Upated Successfully",
        this.loadUsers();
      })
    }
    this.modalRef.hide();
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(res => {
      this.loadUsers();
      this.statusMessage = "Record Deleted Successfully";
    })

  }
  

}
