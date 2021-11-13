import { IData } from './../../interfaces/data.interface';
import { Injectable } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {
  private readonly DATA_SIZE = 4000;
  private lorem: LoremIpsum;
  private randomData: IData[] = [];

  private randomList = new BehaviorSubject<IData[]>([]);
  public dataList$ = this.randomList.asObservable();

  constructor() {
    this.lorem = new LoremIpsum({
      wordsPerSentence : {
        max: 4,
        min: 2
      }
    });
    // Simulamos la carga asíncrona de un servicio esperando 2sg
    setTimeout((): void => this.generateAllData(), 2000);
  }

  generateAllData(): void {
    for (let id = 0; id < this.DATA_SIZE; id++) {
      const element: IData = {
        id,
        photo: `https://picsum.photos/id/${id}/500/500.jpg`,
        text: this.lorem.generateSentences(1)
      };
      this.randomData.push(element);
    }
    this.randomList.next(this.randomData);
  }

  getAllData = (): IData[] => this.randomData;

  getDataSize = (): number => this.DATA_SIZE;

  getDataRange = (initPosition: number, endPosition: number): IData[] => this.randomData.slice(initPosition, endPosition);
  
  filterData = (text: string): IData[] => this.randomData.filter(element => this.foundElement(element, text));
  
  foundElement = (element: IData, text: any): boolean => element.id.toString().includes(text) || element.text.toLocaleLowerCase().includes(text.toLocaleLowerCase());

}
