<template>
	<section class="main__links links">
		<a :href="link" class="links__item text-center text-uppercase" v-for="{ link, path, text } in links" :key="text">
			<img class="links__img" :src="path" :alt="text">
			<div class="links__text">{{ text }}</div>
		</a>
	</section>
</template>
<script setup>
const links = [
	{
		link: '',
		path: '/about/links/01.png',
		text: 'Наши Услуги'
	},
	{
		link: '',
		path: '/about/links/02.png',
		text: 'поиск Товаров'
	},
	{
		link: '',
		path: '/about/links/03.png',
		text: 'Поиск Объявлений'
	},
	{
		link: '',
		path: '/about/links/04.png',
		text: 'Новости / Блог'
	},
]
</script>