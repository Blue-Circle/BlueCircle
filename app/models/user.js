import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  verified:DS.attr('boolean', {defaultValue:false}),
  phonenumber:DS.attr('number'),
  circles: DS.hasMany('circle')

});
