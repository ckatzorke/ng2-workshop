import {bootstrap} from 'angular2/platform/browser';
import {WorkshopApp} from './app/workshop';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(WorkshopApp, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS
]);
