import { MAIN_STATE_UPDATED } from '../actions/constants';
import * as R from 'ramda';

const initialState = {};

/**
 * Main Component action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function canvas(state = initialState, action) {

  switch (action.type) {

    case MAIN_STATE_UPDATED:
      return R.merge(state, action.state);

    default:
      return state;
  }

}
