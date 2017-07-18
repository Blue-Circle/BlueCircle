import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  phoneNumber: DS.attr(),
  createdAt: DS.attr('date', { defaultValue: new Date()}),
  circles: DS.hasMany('circle',{async:true})
});
