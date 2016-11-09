/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhiskeyListComponent } from './whiskey-list.component';

describe('WhiskeyListComponent', () => {
  let component: WhiskeyListComponent;
  let fixture: ComponentFixture<WhiskeyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskeyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskeyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
