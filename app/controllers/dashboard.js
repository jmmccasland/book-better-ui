import Controller from '@ember/controller';

export default Controller.extend({
  modalOpen: false,

  actions: {
    toggleModal() {
      this.toggleProperty('modalOpen');
    }
  }
});
