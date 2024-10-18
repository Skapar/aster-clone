import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireMarketplaceComponent } from './tire-marketplace.component';

describe('TireMarketplaceComponent', () => {
  let component: TireMarketplaceComponent;
  let fixture: ComponentFixture<TireMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TireMarketplaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TireMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
