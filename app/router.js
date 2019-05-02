import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');
  this.route('tour', { path: '/tour/:id'}, function() {
    this.route('show', { path: '/show/:show_id'});
  });
});

export default Router;
