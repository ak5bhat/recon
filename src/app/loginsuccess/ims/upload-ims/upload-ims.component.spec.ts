import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImsComponent } from './upload-ims.component';

describe('UploadImsComponent', () => {
  let component: UploadImsComponent;
  let fixture: ComponentFixture<UploadImsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadImsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadImsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
