import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {BookData} from '../../services/book-data/book-data';
import {BookObj} from '../../services/book-data/book-data';

@Component({
    selector: 'book-show',
    templateUrl: 'app/components/book-show/book-show.html',
    styleUrls: ['app/components/book-show/book-show.css'],
    providers: [BookData],
    directives: [],
    pipes: []
})
export class BookShow implements OnInit {

    @Input() book: BookObj = new BookObj();

    routeParams: RouteParams;
    bookData: BookData;

    constructor(routeParams: RouteParams, bookData: BookData) {
        this.routeParams = routeParams;
        this.bookData = bookData;
    }

    ngOnInit() {
        let isbn: string = this.routeParams.get('isbn');
        console.log('Showing ISBN: ', isbn);
        this.bookData.getBookByISBN(isbn).subscribe(book => { this.book = book; });
    }

}
