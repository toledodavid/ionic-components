import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static:true}) segment: IonSegment;

  superHeroes: Observable<any>;
  valorSegment = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes()
  }

  segmentChanged(event){
    this.valorSegment = event.detail.value;
    if(this.valorSegment === 'todos'){
      this.valorSegment = '';
      return;
    }else{
      
    }
    //console.log(valorSegment);
  }

}
