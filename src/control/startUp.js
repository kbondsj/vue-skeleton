import Vue from 'vue';
import App from 'App';
import { sync } from 'vuex-router-sync';
import ConfigPlugin from 'config/ConfigPlugin';
import i18nManagerInit from './18n-manager';

const startUp = (router, store) => (
	Promise.all([
		i18nManagerInit(router, store),
		// Reference the configManager using vm.$config
		Vue.use(ConfigPlugin),
		// sync router data to store
		sync(store, router),
	])
	.then(() => new Vue({ ...App, router, store })));

export default startUp;
