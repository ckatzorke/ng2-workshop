import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {WorkshopApp} from '../app/workshop';

beforeEachProviders(() => [WorkshopApp]);

describe('App: Workshop', () => {
  it('should have the `defaultMeaning` as 42', inject([WorkshopApp], (app: WorkshopApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([WorkshopApp], (app: WorkshopApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

