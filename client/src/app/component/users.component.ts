import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../User';

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html',
})
export class UsersComponent implements OnInit{
  users: User[]
  constructor(private _userService: UserService){

  }
  ngOnInit(){
    this.users = [];
    this._userService.getUsers()
    .subscribe(users => {
      this.users = users;
      //console.log(users);
    });
  }
  addUser(event, userName, userPassword, userRole){
    var result;
    var newUser = {
      username: userName.value,
      password: userPassword.value,
      role: userRole.value,
      isCompleted: false
    };
    result = this._userService.saveUser(newUser);
      result.subscribe(x =>{
        this.users.push(newUser);
        userName.value = '';
        userPassword.value = '';
        userRole.value = '';
      })
    //console.log(userName.value);
    //console.log(userPassword.value);
    //console.log(userRole.value);
  }
  setEditState(user, state){
    if(state){
    user.isEditMode = state;
    }else{
     delete user.isEditMode;
    }
  }
  updateStatus(user){
    var _user ={
      _id: user._id,
      username: user.username,
      password: user.password,
      role: user.role,
      isCompleted: !user.isCompleted
    }
    this._userService.updateUser(_user)
    .subscribe(data => {
      user.isCompleted = !user.isCompleted;
    });
  }
  updateUserText(event, user, username, password, role){
    user.username = user.username
    user.password = user.password
    user.role = user.role
    var _user = {
      _id: user._id,
      username: user.username,
      password: user.password,
      role: user.role,
      isCompleted: user.isCompleted
    }
    this._userService.updateUser(_user)
    .subscribe(data =>{
      this.setEditState(user, false);
    })
  }
  deleteUser(user){
    var users = this.users;
    this._userService.deleteUser(user._id)
    .subscribe(data =>{
      this.users.splice(user._id, 1);
     })
}
}