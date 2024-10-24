import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faS } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(far,fab,fas);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(VueSplide).mount('#app')
