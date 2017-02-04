import * as chai from 'chai';
const expect = chai.expect;
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent (inline template)', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the name <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no name in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).to.equal('');
  });

  it('should display original name', () => {
    fixture.detectChanges();
    expect(el.textContent).to.contain(comp.name);
  });

  it('should display a different test name', () => {
    comp.name = 'Test name';
    fixture.detectChanges();
    expect(el.textContent).to.contain('Test name');
  });
});
