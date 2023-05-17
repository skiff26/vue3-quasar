<template>
	<q-header class="header">
		<nav class="nav"><a href="#">Главная</a> / <a href="#">Профиль пользователя Иванов Степан </a></nav>
		<nav class="nav-mobile"><a href="#">Главная</a> / <a href="#">Личный кабинет</a> / <a href="">Профиль
				пользователя</a>
		</nav>
	</q-header>
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
