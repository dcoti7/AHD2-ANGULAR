import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargaritaComponent } from './margarita.component';

describe('MargaritaComponent', () => {
  let component: MargaritaComponent;
  let fixture: ComponentFixture<MargaritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MargaritaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MargaritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
