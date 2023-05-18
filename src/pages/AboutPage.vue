<template>
	<AdBlock :ad="ad" />
	<nav class="header">
		<div class="nav"><a href="#">Главная</a> / <a href="#">О нас</a></div>
		<div class="nav-mobile"><a href="#">Главная</a> / <a href="#">О нас</a></div>
	</nav>
	<main class="main">
		<div class="main__container">
			<h1 class="main__title text-center text-uppercase">TITLE</h1>
			<TheDescription />
			<TheAboutArticle :isSmall="isSmall" :isMobile="isMobile" />
			<TheAboutAdvantage />
			<TheAboutLinks />
		</div>
	</main>
</template>
<script setup>
import AdBlock from 'src/components/AdBlock.vue';
import TheDescription from 'src/components/TheDescription.vue';
import TheAboutArticle from 'src/components/TheAboutArticle.vue';
import TheAboutAdvantage from 'src/components/TheAboutAdvantage.vue';
import TheAboutLinks from 'src/components/TheAboutLinks.vue';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)
const isSmall = ref(false)

const ad = computed(() => {
	return isMobile.value ? "РЕКЛАМА (320 x 200)" : "Реклама (1440 x 300)"
})
const onResize = () => {
	isMobile.value = window.innerWidth < 470
	isSmall.value = window.innerWidth < 1024

}

onMounted(() => {
	onResize()
	window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
})
</script>