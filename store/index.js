import { createStore } from './store'
import state from './state'
import mutation from './mutation'
import action from './action'
import getter from './getter'
export default createStore({
  state,
  mutation,
  action,
  getter
})