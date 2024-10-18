import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTypeSearchComponent } from './body-type-search.component';

describe('BodyTypeSearchComponent', () => {
  let component: BodyTypeSearchComponent;
  let fixture: ComponentFixture<BodyTypeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyTypeSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTypeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
