import {Component} from 'angular2/core';
import {BookData} from '../../services/book-data/book-data';
import {BookObj} from '../../services/book-data/book-data';
import {Book} from '../book/book';

@Component({
    selector: 'book-index',
    templateUrl: 'app/components/book-index/book-index.html',
    styleUrls: ['app/components/book-index/book-index.css'],
    providers: [BookData],
    directives: [Book],
    pipes: []
})
export class BookIndex {

    books: Array<BookObj>;

    constructor(private bookData: BookData) {
        bookData.getBooks().subscribe(books => this.books = books);
    }

    handleTitleClickEvent($event: any): void {
        console.log('Got event:', $event);
    }

}
