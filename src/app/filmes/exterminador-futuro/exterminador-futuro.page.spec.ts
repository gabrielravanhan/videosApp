import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExterminadorFuturoPage } from './exterminador-futuro.page';

describe('ExterminadorFuturoPage', () => {
  let component: ExterminadorFuturoPage;
  let fixture: ComponentFixture<ExterminadorFuturoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExterminadorFuturoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExterminadorFuturoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
