import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateListingsComponent } from './private-listings.component';

describe('PrivateListingsComponent', () => {
  let component: PrivateListingsComponent;
  let fixture: ComponentFixture<PrivateListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
