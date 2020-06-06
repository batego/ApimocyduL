import { Component, OnInit, HostBinding } from '@angular/core';
import { Area } from '../../models/Area';
import { AreasService } from 'src/app/services/areas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  // @HostBinding('class') classes = 'row';
  edit = false;

  alert = {
      show: false,
      message: ''
  };

  area: any = {
    codigo: null,
    nombre: '',
    lider: null,
    estado: true
  };

  constructor(private areaService: AreasService, private route: Router, private acivateRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.acivateRoute.snapshot.params;
    console.log(params);
    if (params.codigo) {
      this.areaService.getoneArea(params.codigo).subscribe(
        res => {
          // res.estado = res.estado === 1 ? true : false;
          this.area = res;
          this.edit = true;
          console.log(res);
        },
        err => console.log(err)
      );
    }
  }

  saveArea() {
    delete this.area.codigo;
    this.area.estado = this.area.estado === 1 ? true : false;
    this.areaService.saveArea(this.area).subscribe(
      res => {
        console.log(res);

        this.alert = {
          show: true,
          message: res[0].message
        };

        setTimeout(() => {
          this.route.navigate(['/areas']);
        }, 1000);

      },
      err => console.error(err)
    );
  }

  updateArea(codigo: number){
    console.log(this.area);

    delete this.area.codigo;

    this.area.estado = this.area.estado === 1 ? true : false;
    this.areaService.updateArea(codigo, this.area).subscribe(
      res => {
        console.log(res);
        this.alert = { show: true, message: 'Area Updated' };
        setTimeout(() => {
          this.route.navigate(['/areas']);
        }, 1000);
      },
      err => console.log(err)
    );
  }

}
