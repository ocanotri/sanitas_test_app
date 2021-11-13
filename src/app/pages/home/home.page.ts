import { IData } from './../../interfaces/data.interface';
import { DataGeneratorService } from './../../services/data-generator/data-generator.service';
import { Component, ViewChild } from '@angular/core';
import { IonVirtualScroll } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public filterData: IData[] = [];
  public allDataCharged: IData[] = [];
  public subscription: Subscription;
  public searchData: any;
  public maxSizeData: number;

  constructor( private readonly dataGeneratorService: DataGeneratorService ) {
    this.maxSizeData = this.dataGeneratorService.getDataSize() - 1;
    
  }

  ionViewWillEnter (): void{
    this.subscription = this.dataGeneratorService.dataList$.subscribe(
      value => {
        this.allDataCharged = value;
        this.filterData = this.allDataCharged;
      }
    ); 
  }

  ionViewWillLeave = (): void => this.subscription.unsubscribe();
  
  onSearch = (): IData[] => this.filterData = this.searchData === "" ? this.allDataCharged : this.dataGeneratorService.filterData(this.searchData);

}
