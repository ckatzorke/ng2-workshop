import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {BookData} from './book-data';


describe('BookData Service', () => {

  beforeEachProviders(() => [BookData]);


  it('should ...', inject([BookData], (service:BookData) => {

  }));

});
