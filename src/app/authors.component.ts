import { Component } from '@angular/core';
import {AuthorService} from "./author.service";

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor="let author of authors">{{ author }}</li>
        </ul>
        `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title = "The name of the authors page.";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}
