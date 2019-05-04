import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToTour(id) {
      this.transitionToRoute('tour', id);
    },

    updateShow() {
      // todo update show values
      console.log('updating show. . .');
    },

    deleteShow(tourId) {
      let self = this;
      this.store.findRecord('show', this.model.id, {backgroundReload: false})
        .then(function(show) {
          show.destroyRecord().then(() => {
            self.transitionToRoute('tour', tourId)
          });
        });
    }
  }
});
