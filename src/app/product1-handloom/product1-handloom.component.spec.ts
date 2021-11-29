import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1HandloomComponent } from './product1-handloom.component';

describe('Product1HandloomComponent', () => {
  let component: Product1HandloomComponent;
  let fixture: ComponentFixture<Product1HandloomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product1HandloomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product1HandloomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
