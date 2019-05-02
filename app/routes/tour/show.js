import Route from '@ember/routing/route';

export default Route.extend({
  model({ show_id }) {
    return this.store.findRecord('show', show_id)
  }
});
