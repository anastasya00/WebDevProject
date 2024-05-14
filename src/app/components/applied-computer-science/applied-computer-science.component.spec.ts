import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedComputerScienceComponent } from './applied-computer-science.component';

describe('AppliedComputerScienceComponent', () => {
  let component: AppliedComputerScienceComponent;
  let fixture: ComponentFixture<AppliedComputerScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppliedComputerScienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppliedComputerScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
