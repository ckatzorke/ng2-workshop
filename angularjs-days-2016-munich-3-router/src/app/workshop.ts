import {Component, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {BookIndex} from './components/book-index/book-index';
import {BookShow} from './components/book-show/book-show';


@Component({
    selector: 'workshop-app',
    providers: [ROUTER_PROVIDERS/*, provide(LocationStrategy, {
        useClass: HashLocationStrategy
    })*/
    ],
    templateUrl: 'app/workshop.html',
    directives: [ROUTER_DIRECTIVES, BookIndex, BookShow],
    pipes: []
})
@RouteConfig([
    { path: '/books', component: BookIndex, as: 'Books', useAsDefault: false },
    { path: '/book/:isbn', component: BookShow, as: 'Book', useAsDefault: false }
])
export class WorkshopApp {
    defaultMeaning: number = 42;

    meaningOfLife(meaning?: number) {
        return `The meaning of life is ${meaning || this.defaultMeaning}`;
    }

}
