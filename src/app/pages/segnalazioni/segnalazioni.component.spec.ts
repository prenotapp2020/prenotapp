import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegnalazioniComponent } from './segnalazioni.component';

describe('SegnalazioniComponent', () => {
  let component: SegnalazioniComponent;
  let fixture: ComponentFixture<SegnalazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegnalazioniComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegnalazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
