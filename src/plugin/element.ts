import Vue from 'vue';
import { debounce } from 'web-toolkit/src/utils';
function adapt() {
  const screenWidth = window.innerWidth;
  let size = '';
  if (screenWidth < 940) {
    size = 'mini';
  } else if (screenWidth < 1000) {
    size = 'small';
  } else {
    size = 'medium';
  }
  Vue.prototype.$ELEMENT = { size };
}
window.addEventListener('resize', debounce(adapt));
adapt();
