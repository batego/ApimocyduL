import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AreasService } from '../../services/areas.service';

@Component({
  selector: 'app-oper-user',
  templateUrl: './oper-user.component.html',
  styleUrls: ['./oper-user.component.css']
})
export class OperUserComponent implements OnInit {

  edit = false;

  alert = {
    show: false,
    message: ''
  };

  areas: any = [];

  user: any = {
    numero_documento: null,
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    email: '',
    area: null,
    salario: null,
    estado: true,
  };

  constructor(private route: Router, private ar: ActivatedRoute, private usersService: UsersService, private ars: AreasService) { }

  ngOnInit(): void {
    this.ars.getAreas().subscribe(
      res => {
        this.areas = res;
        console.log(res);
      },
      err => { console.log(err); }

    );

    const params = this.ar.snapshot.params;
    console.log(params);
    if (params.id) {
      this.usersService.getoneUser(params.id).subscribe(
        res => {
          // res.estado = res.estado === 1 ? true : false;
          this.user = res;
          this.edit = true;
          console.log(res);
        },
        err => console.log(err)
      );
    }
  }

  saveUser() {
    // delete this.user.numero_documento;
    this.user.estado = this.user.estado === 1 ? true : false;
    this.usersService.saveUser(this.user).subscribe(
      res => {
        console.log(res);

        this.alert = {
          show: true,
          message: 'User Created'
        };

        setTimeout(() => {
          this.route.navigate(['/usuarios']);
        }, 1000);

      },
      err => console.error(err)
    );
  }

  updateUser(id: number) {
    console.log(this.user);

    delete this.user.numero_documento;

    this.user.estado = this.user.estado === 1 ? true : false;
    this.usersService.updateUser(id, this.user).subscribe(
      res => {
        console.log(res);
        this.alert = { show: true, message: 'User Updated' };
        setTimeout(() => {
          this.route.navigate(['/usuarios']);
        }, 1000);
      },
      err => console.log(err)
    );
  }

}
