import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToTour() {
      this.transitionToRoute('tour', this.model.id);
    },

    deleteTour() {
      let self = this;
      this.store.findRecord('tour', this.model.id, {backgroundReload: false})
        .then(function(tour) {
          tour.destroyRecord().then(() => {
            self.transitionToRoute('dashboard')
          });
        });
    }
  }
});
