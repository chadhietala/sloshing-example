import Ember from 'ember';

export function range(params/*, hash*/) {
  return new Array(params[0]);
}

export default Ember.Helper.helper(range);
