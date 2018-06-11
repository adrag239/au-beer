import { bindable } from 'aurelia-framework';
import { IArticle } from 'data-service';

export class Price {
    @bindable article: IArticle;

    public get price() : string {
        return this.article && this.article.Price.toFixed(0) + ' SEK';
    }

    public get pricePerLiter() : string {
        return this.article && (this.article.Price * 1000 / this.article.Volume).toFixed(0) + ' SEK';
    }
    
}