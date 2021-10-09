import store from '../store'
const $themeList = [
  {
    id: 'theme-dark',
    state : true
  },
  {
    id: 'theme-light',
    state: false
  },
  
 
]
export default {
  name: 'SimplePlugin',
  install (Vue, options = {}) {
    Vue.prototype.$changeTheme = function (theme = $themeList[0]) {
      const body = document.querySelector('body')
      $themeList.forEach(t => {
        body.classList.remove(t.id)
      })
      body.classList.add(theme.id)
      store.dispatch('Theme/changeTheme', theme)
    }
    Vue.prototype.$themeList = $themeList
    Vue.directive('ExternalLink', (el, binding) => {
      if (binding.value) {
        el.onclick = () => {
          window.location.href = binding.value
        }
      }
    })
  }
}
