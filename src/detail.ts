import { inject } from 'aurelia-framework';
import { DataService, IArticle } from 'data-service';
import { RouteConfig } from 'aurelia-router';

@inject(DataService)
export class Detail {

    public article: IArticle;

    private routeConfig: RouteConfig;

    constructor(private dataService: DataService) {
        
    }

    activate(params, routeConfig) {

        this.routeConfig = routeConfig;

        this.dataService.getArticleDetails(params.id).then( data => {
            this.article = data;

            this.routeConfig.navModel.setTitle(this.article.Name);
        } );
      }

}