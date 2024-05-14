import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainingComputerScienceComponent } from './entertaining-computer-science.component';

describe('EntertainingComputerScienceComponent', () => {
  let component: EntertainingComputerScienceComponent;
  let fixture: ComponentFixture<EntertainingComputerScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntertainingComputerScienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntertainingComputerScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
