<template>
	<!-- Для меня -->
	<!-- <q-breadcrumbs class="header grey-6" active-color="gray-6">
		<q-breadcrumbs-el label="Главная" to="/" />
		<q-breadcrumbs-el label="Личный кабинет" to="/" />
		<q-breadcrumbs-el label="Профиль пользователя" to="/" />
	</q-breadcrumbs> -->
	<!-- Для других пользователей -->
	<q-breadcrumbs class="header gray" active-color="gray">
		<q-breadcrumbs-el label="Главная" to="/" />
		<q-breadcrumbs-el label="Профиль пользователя Иванов Степан" to="/" />
	</q-breadcrumbs>
	<main class="main">
		<TheProfileTitle />
		<TheUser />
		<ThePosts />
	</main>
</template>
<script setup>
import TheUser from 'src/components/TheUser.vue';
import ThePosts from 'src/components/ThePosts.vue';
import TheProfileTitle from 'src/components/TheProfileTitle.vue';
</script>