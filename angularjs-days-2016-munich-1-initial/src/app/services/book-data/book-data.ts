import {Injectable} from 'angular2/core';


@Injectable()
export class BookData {

    private books: Array<any>;

    constructor() {
        this.books = [
            {
                title: "JavaScript für Enterprise-Entwickler",
                subtitle: "Professionell programmieren im Browser und auf dem Server",
                isbn: "978-3-89864-728-1",
                abstract: "JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.",
                numPages: 302,
                author: "Oliver Ochs",
                publisher: {
                    name: "dpunkt.verlag",
                    url: "http://dpunkt.de/"
                }
            },
            {
                title: "Node.js & Co.",
                subtitle: "Skalierbare, hochperformante und echtzeitfähige Webanwendungen professionell in JavaScript entwickeln",
                isbn: "978-3-89864-829-5",
                abstract: "Nach dem Webbrowser erobert JavaScript nun auch den Webserver.",
                numPages: 334,
                author: "Golo Roden",
                publisher: {
                    name: "dpunkt.verlag",
                    url: "http://dpunkt.de/"
                }
            },
            {
                title: "Testgetriebene Entwicklung mit JavaScript",
                subtitle: "Das Handbuch für den professionellen Programmierer",
                isbn: "978-3-86490-207-9",
                abstract: "Entwickeln oder warten Sie JavaScript-Webapplikationen und haben immer ein ungutes Gefühl, wenn Sie Ihre Software in Betrieb nehmen? Dann wird es höchste Zeit, dass Sie sich mit testgetriebener Entwicklung vertraut machen. Dieses Buch zeigt JavaScript-Entwicklern, wie Test-Driven Development (TDD) in der Praxis funktionieren kann.",
                numPages: 234,
                author: "Sebastian Springer",
                publisher: {
                    name: "dpunkt.verlag",
                    url: "http://dpunkt.de/"
                }
            }
        ];
    }

    getBooks() {
        return this.books;
    }

}
