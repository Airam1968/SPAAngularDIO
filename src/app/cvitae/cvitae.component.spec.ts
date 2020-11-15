import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvitaeComponent } from './cvitae.component';

describe('CvitaeComponent', () => {
  let component: CvitaeComponent;
  let fixture: ComponentFixture<CvitaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvitaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
