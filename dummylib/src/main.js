import DummyButton from './components/DummyButton.vue'
import store from './stores/store.js'
export default {
  install (Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.')
    }
    
    options.store.registerModule('dummylib', store)
 
    Vue.component('dummy-button', DummyButton)
  }
}