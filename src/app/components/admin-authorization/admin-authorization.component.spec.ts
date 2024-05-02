import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthorizationComponent } from './admin-authorization.component';

describe('AdminAuthorizationComponent', () => {
  let component: AdminAuthorizationComponent;
  let fixture: ComponentFixture<AdminAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAuthorizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
