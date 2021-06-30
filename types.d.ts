/**
 * Augment the typings of Vue.js
 */
import Vue = require('vue');

import { PluginFunction } from "vue";
import VueLogger from 'vuejs-logger';


export const install: PluginFunction<{}>;

export interface Log {
    debug(...args: any[]): void;

    info(...args: any[]): void;

    warn(...args: any[]): void;

    error(...args: any[]): void;

    fatal(...args: any[]): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $log: Log;
    }
}

export default VueLogger;

declare module '@nuxt/vue-app' {
    interface Context {
        $log: Log;
    }
    interface NuxtAppOptions {
        $log: Log;
    }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
    interface Context {
        $log: Log;
    }

    interface NuxtAppOptions {
        $log: Log;
    }

    interface Configuration {
        log?: Log;
    }
}
