import { inject } from 'aurelia-framework';
import { DataService, IArticle } from 'data-service';

@inject(DataService)
export class List {

    public articles: IArticle[] = [];

    constructor(private dataService: DataService) {

        dataService.getArticles().then( data => {
            this.articles = data;
        });

    }
}