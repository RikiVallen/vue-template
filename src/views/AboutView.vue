<template>
	<div class="grid place-content-center select-none">
		<h1 class="bg-bts text-white p-2 rounded-xl cursor-pointer" @click="animate">This is an About page</h1>
	</div>
</template>


<script lang="ts" setup>
const animate = (el: MouseEvent) => {
	const target = el.target as HTMLElement;
	target.classList.remove('animate-heartBeat');
	void target.offsetWidth; 
	target.classList.add('animate-heartBeat');

};
</script>