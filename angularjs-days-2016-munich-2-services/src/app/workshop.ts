import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookIndex} from './components/book-index/book-index';


@Component({
    selector: 'workshop-app',
    providers: [],
    templateUrl: 'app/workshop.html',
    directives: [ROUTER_DIRECTIVES, BookIndex],
    pipes: []
})
@RouteConfig([

])
export class WorkshopApp {
    defaultMeaning: number = 42;

    meaningOfLife(meaning?: number) {
        return `The meaning of life is ${meaning || this.defaultMeaning}`;
    }

    handleTitleClicked($event: any) {
        console.log($event);
    }

}
