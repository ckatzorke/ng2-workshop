import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {BookObj} from '../../services/book-data/book-data';


@Component({
    selector: 'book',
    templateUrl: 'app/components/book/book.html',
    styleUrls: ['app/components/book/book.css'],
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})
export class Book {

    @Input() book: BookObj;

    @Output() titleClicked: EventEmitter<string> = new EventEmitter();

    constructor() { }

    emit() {
        let txt = `Emitting: ${this.book.title}`;
        this.titleClicked.emit(txt);
        console.log(txt);
    }

}
