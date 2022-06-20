<template>
	<div class="grid place-content-center select-none">
		<h1 class="bg-green-400 cursor-pointer text-white p-2 rounded-xl" @click="animate">This is a Home page</h1>
	</div>
</template>

<script setup lang="ts">
const animate = (el: MouseEvent) => {
	const target = el.target as HTMLElement;
	target.classList.remove('animate-heartBeat');
	void target.offsetWidth; 
	target.classList.add('animate-heartBeat');

};
</script>
