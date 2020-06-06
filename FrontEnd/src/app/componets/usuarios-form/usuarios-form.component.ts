import { Component, OnInit, HostBinding } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  users: any = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(
      res => {
        this.getUsers();
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
