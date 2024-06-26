// 各ページのルーティングを記したファイル
import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import Top from "./components/pages/Top.vue"

const routes = [
	{ path: "/", name: "top", component: Top, meta: { title: "TOP", } },
];

// ルーター作成
const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.afterEach((to, from) => {
	// ルーターによるナビゲーション終了後に発火
	document.title = `${to.meta.title} - JIDS`;
});

// ルーティングを公開
export default router