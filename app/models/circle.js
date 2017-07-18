import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  name: DS.attr(),
  total_collected: DS.attr('number'),
  createdAt: DS.attr('date', { defaultValue: new Date()}),
  // child: DS.belongsTo('child') This is the beneficiary of the circle
  users: DS.hasMany('user',{async:true})

});
