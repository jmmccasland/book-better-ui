import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToTour(id) {
      this.transitionToRoute('tour', id);
    }
  }
});
