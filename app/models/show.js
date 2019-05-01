import DS from 'ember-data';
const { Model, belongsTo, attr } = DS;

export default Model.extend({
  city: attr(),
  state: attr(),
  status: attr(),
  tour: belongsTo()
});
