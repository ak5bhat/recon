import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsViewComponent } from './ims-view.component';

describe('ImsViewComponent', () => {
  let component: ImsViewComponent;
  let fixture: ComponentFixture<ImsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
