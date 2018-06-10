import { inject } from 'aurelia-framework';
import { DataService, IArticle } from 'data-service';

@inject(DataService)
export class Detail {

    public article: IArticle;

    constructor(private dataService: DataService) {
        
    }

    activate(params, routeConfig) {

        console.log(params.id);

        this.dataService.getArticleDetails(params.id).then( data => {
            this.article = data;
        } );
      }

}