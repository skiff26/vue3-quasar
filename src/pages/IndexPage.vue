<template>
	<nav class="header">
		<div class="nav"><a href="#">Главная</a> / <a href="#">Профиль пользователя Иванов Степан </a></div>
		<div class="nav-mobile"><a href="#">Главная</a> / <a href="#">Личный кабинет</a> / <a href="">Профиль
				пользователя</a>
		</div>
	</nav>
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