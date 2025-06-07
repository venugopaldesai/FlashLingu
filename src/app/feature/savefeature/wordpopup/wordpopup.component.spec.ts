import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpopupComponent } from './wordpopup.component';

describe('WordpopupComponent', () => {
  let component: WordpopupComponent;
  let fixture: ComponentFixture<WordpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
