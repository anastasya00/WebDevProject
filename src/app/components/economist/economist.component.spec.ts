import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomistComponent } from './economist.component';

describe('EconomistComponent', () => {
  let component: EconomistComponent;
  let fixture: ComponentFixture<EconomistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EconomistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
