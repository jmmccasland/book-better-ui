import Controller from '@ember/controller';

export default Controller.extend({
  modalOpen: false,
  title: '',

  reset() {
    this.set('title', '');
  },

  actions: {
    toggleModal() {
      this.toggleProperty('modalOpen');
    },

    createTour(ev) {
      ev.preventDefault();

      let tour = this.store.createRecord('tour', {
        title: this.title
      });

      tour.save();

      this.reset();
      this.set('modalOpen', false);

    }
  }
});
