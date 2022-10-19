import { inject, reactive } from "vue"
class Store {
  constructor(options) {
    const { state, mutation, action, getter } = options
    const that = this
    this._state = reactive({ data: state })
    this._mutation = {}
    this._action = {}
    this.getters = {}
    Object.keys(mutation).forEach(key => this._mutation[key] = (playload) => {
      mutation[key](this.state, playload)
    })
    Object.keys(action).forEach(key => this._action[key] = (playload) => {
      action[key](this, playload)
    })
    Object.keys(getter).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get () {
          return getter[key](that.state)
        }
      })
    })
  }
  get state () {
    return this._state.data
  }
  commit (key, playload) {
    this._mutation[key](playload)
  }
  dispatch (key, playload) {
    this._action[key](playload)
  }
  install (app) {
    app.provide('store', this)
  }
}


export function createStore (options) {
  return new Store(options)
}
export function useStore () {
  return inject('store')
}