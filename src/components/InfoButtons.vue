<template>
	<div class="expert-info__btns" v-if="isMobile">
		<q-btn style="background: goldenrod; color: white;" class="text-weight-bold" square label="Назад" />
		<q-btn color="secondary" class="text-weight-bold" square label="Выбрать" />
	</div>
	<div class="expert-info__btns" v-else>
		<q-btn no-wrap color="secondary" class="text-weight-bold expert-info__doc" square icon="description"
			label="Сертификаты" />
		<q-btn no-wrap color="secondary" class="text-weight-bold" label="Выбрать этого эксперта" />
	</div>
</template>
<script setup>
defineProps(['isMobile'])
</script>