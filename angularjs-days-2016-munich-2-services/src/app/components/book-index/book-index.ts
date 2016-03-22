import {Component, Input } from 'angular2/core';
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

    @Input() title: string;

    books: Array<BookObj>;

    constructor(private bookData: BookData) {
        bookData.getBooks().subscribe(books => this.books = books);
    }

}
