import { Component} from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  //moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent  {  
	showDialog = false;

  	filesToUpload: Array<File>;
 
    constructor() {
        this.filesToUpload = [];
    }
 
    upload() {
        this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }
 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }
 
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    } 
}
