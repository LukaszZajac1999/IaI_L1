import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemTexComponent } from './blog-item-tex.component';

describe('BlogItemTexComponent', () => {
  let component: BlogItemTexComponent;
  let fixture: ComponentFixture<BlogItemTexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogItemTexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemTexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
