import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  home: DS.attr('string'),
  image: DS.attr(),
  circle: DS.belongsTo('circle')

});
