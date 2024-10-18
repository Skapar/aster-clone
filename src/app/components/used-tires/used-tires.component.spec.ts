import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedTiresComponent } from './used-tires.component';

describe('UsedTiresComponent', () => {
  let component: UsedTiresComponent;
  let fixture: ComponentFixture<UsedTiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedTiresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
