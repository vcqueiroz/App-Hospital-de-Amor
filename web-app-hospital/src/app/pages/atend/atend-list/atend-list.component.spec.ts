import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendListComponent } from './atend-list.component';

describe('AtendListComponent', () => {
  let component: AtendListComponent;
  let fixture: ComponentFixture<AtendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
