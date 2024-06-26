<template>
	<div class="border-box flex">
		<img src="">
		<div>
			<h2>{{ data.name }}</h2>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {defineProps} from "vue";

	const props = defineProps({
		data: {
			type: Object,
		},
	});

</script>