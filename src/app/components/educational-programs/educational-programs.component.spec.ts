import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalProgramsComponent } from './educational-programs.component';

describe('EducationalProgramsComponent', () => {
  let component: EducationalProgramsComponent;
  let fixture: ComponentFixture<EducationalProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationalProgramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
