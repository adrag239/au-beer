import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Systembolaget';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('list'), title: 'Articles' },
      { route: 'detail/:id', moduleId: PLATFORM.moduleName('detail'), name: 'detail' }
    ]);

    this.router = router;
  }
}
