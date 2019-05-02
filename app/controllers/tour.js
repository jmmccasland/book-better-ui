import Controller from '@ember/controller';

export default Controller.extend({
  city: '',

  reset() {
    this.setProperties({
      city: ''
    });
  },

  actions: {
    createShow(ev) {
      ev.preventDefault();

      const tour = this.model;

      const show = this.store.createRecord('show', {
        city: this.city,
        state: this.state,
        date: this.date,
        tour: tour
      });

      show.save().then(() => {
        this.reset();
      });
    }
  }
});
