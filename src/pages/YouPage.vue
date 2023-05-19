<template>
	<q-breadcrumbs class="header gray" active-color="gray">
		<q-breadcrumbs-el label="Главная" to="/" />
		<q-breadcrumbs-el label="Личный кабинет" to="/" />
	</q-breadcrumbs>
	<TheYouMain />
</template>
<script setup>
import TheYouMain from 'src/components/TheYouMain.vue';
</script>