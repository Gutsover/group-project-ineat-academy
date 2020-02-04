import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPicsComponent } from './infos-pics.component';

describe('InfosPicsComponent', () => {
  let component: InfosPicsComponent;
  let fixture: ComponentFixture<InfosPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
