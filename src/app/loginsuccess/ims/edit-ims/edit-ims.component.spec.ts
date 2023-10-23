import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImsComponent } from './edit-ims.component';

describe('EditImsComponent', () => {
  let component: EditImsComponent;
  let fixture: ComponentFixture<EditImsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditImsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
