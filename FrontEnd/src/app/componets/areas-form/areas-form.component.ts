import { Component, OnInit, HostBinding } from '@angular/core';
import { AreasService } from '../../services/areas.service';


@Component({
  selector: 'app-areas-form',
  templateUrl: './areas-form.component.html',
  styleUrls: ['./areas-form.component.css']
})
export class AreasFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  areas: any = [];

  constructor(private areaService: AreasService) { }

  ngOnInit(): void {
   this.getAreas();
  }

  getAreas(){
    this.areaService.getAreas().subscribe(
      res => {
        this.areas = res;
        // console.log(res);
      },
      err => console.log(err)
    );
  }

  deleteArea(codigo: number){
    this.areaService.deleteArea(codigo).subscribe(
      res => {
        this.getAreas();
        console.log(res);
      },
      err => console.log(err)
    );

  }

  editArea(codigo: number){
    console.log(codigo);
    // this.areas = 
  }

}
