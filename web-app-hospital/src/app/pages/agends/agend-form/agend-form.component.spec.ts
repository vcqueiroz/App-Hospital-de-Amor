import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendFormComponent } from './agend-form.component';

describe('AgendFormComponent', () => {
  let component: AgendFormComponent;
  let fixture: ComponentFixture<AgendFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
