import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
    selector: 'book',
    templateUrl: 'app/components/book/book.html',
    styleUrls: ['app/components/book/book.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class Book {

    @Input() book: any;

    @Output() titleClicked: EventEmitter<string> = new EventEmitter();

    constructor() { }

    emit() {
        this.titleClicked.emit(`Emitting: ${this.book.title}`);
    }

}
