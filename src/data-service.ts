import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class DataService {

    constructor(private httpClient: HttpClient) { 

    }

    public getArticles(): Promise<IArticle[]> {

        return this.httpClient
            .fetch('au-drinks.json')
            .then(response => response.json());
    }

    public getArticleDetails(id: number): Promise<IArticle> {

        return this.httpClient
            .fetch('au-drinks.json')
            .then(response => response.json())
            .then(data => {
                let article = data.find(a => a.Id == id);

                return article;
            });
    }
}

export interface IArticle {
    Id: number,
    Name: string,
    Price: number,
    Manufacturer: string,
    Volume: number,
    Type: string,
    Country: string
}