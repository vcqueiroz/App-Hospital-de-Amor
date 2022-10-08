import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendListComponent } from './agend-list.component';

describe('AgendListComponent', () => {
  let component: AgendListComponent;
  let fixture: ComponentFixture<AgendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
