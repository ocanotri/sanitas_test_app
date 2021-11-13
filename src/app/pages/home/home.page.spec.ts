import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all data', () => {
    component.searchData = '';
    fixture.detectChanges();
    component.onSearch();
    expect(component.filterData).toEqual(component.allDataCharged);
  });

  it('should show filtered results', () => {
    component.searchData = '1';
    fixture.detectChanges();
    component.onSearch();
    expect(component.filterData).not.toEqual(component.allDataCharged);
  });
  
  it('should subscribe', fakeAsync(() => {
    component.ionViewWillEnter();
    tick(1500);
    expect(component.allDataCharged.length).toEqual(component.maxSizeData + 1);
  }));
  
  it('should unsubscribe', () => {
    component.subscription = new Subscription();
    spyOn(component.subscription, 'unsubscribe');
    component.ionViewWillLeave();
    expect(component.subscription.unsubscribe).toHaveBeenCalledTimes(1);
  });

});
