import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';
import{DataService} from '../data.service';

@Component({
  selector: 'app-lost',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items:any;

  constructor(private rout: ActivatedRoute, private router: Router, private _data:DataService ) {
    this.rout.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.item.subscribe(res => this.items=res);
  }

  sendMeHome(){
    this.router.navigate(['']);
  }


}
