import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
  constructor(private _http:Http){

  }
  getUsers(){
    return this._http.get('/api/users')
    .map(res => res.json());
  }
  saveUser(user){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post('api/user', JSON.stringify(user), {headers: headers})
    .map(res => res.json())
  }
  updateUser(user){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.put('api/user/'+user._id, JSON.stringify(user), {headers: headers})
    .map(res => res.json())
  }
  deleteUser(id){
    return this._http.delete('api/user/'+id)
      .map(res => res.json());
  }
}
