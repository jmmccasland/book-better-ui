import DS from 'ember-data';
const { Model, attr, hasMany} = DS;

export default Model.extend({
  title: attr(),
  shows: hasMany('show')
});
