import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


export class BookObj {
    title: string;
    isbn: string;
    publisher: Publisher = new Publisher();
    author: string;
}

export class Publisher {
    name: string;
    url: string;
}

@Injectable()
export class BookData {

    private baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:4730/books';
    }

    getBooks(): Observable<any> {
        return this.http.get(this.baseUrl).map(response => response.json());
    }

    getBookByISBN(isbn: string): Observable<BookObj> {
        return this.http.get(this.baseUrl + '/' + isbn).map(response => response.json());
    }

}
