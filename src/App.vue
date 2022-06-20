<template>
	<HeaderComponent />
	<div class="router-wrapper">
		<router-view v-slot="{ Component }">
			<component :is="Component" class="router-component" />
		</router-view>
	</div>
	<FooterComponent />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style lang="scss" scoped>

.router-wrapper {
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
}
.router-component {
		flex: 1 1 auto;
}
</style>

