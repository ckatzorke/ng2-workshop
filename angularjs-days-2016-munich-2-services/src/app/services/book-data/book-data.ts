import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


export class BookObj {
    title: string;
    publisher: any;
    author: string;
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

}
