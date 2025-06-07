import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavefeatureComponent } from './savefeature.component';

describe('SavefeatureComponent', () => {
  let component: SavefeatureComponent;
  let fixture: ComponentFixture<SavefeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavefeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavefeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
