<template>
	<AdBlock :ad="ad" />
	<q-breadcrumbs class="header gray" :style="{ 'paddingLeft': isSmall ? '0' : '75px' }" active-color="gray">
		<q-breadcrumbs-el label="Главная" to="/" />
		<q-breadcrumbs-el label="О нас" to="/" />
	</q-breadcrumbs>
	<main class="about">
		<div class="about__container">
			<h1 class="about__title text-uppercase">TITLE</h1>
			<AboutDescription />
			<TheAboutArticle :isSmall="isSmall" :isMobile="isMobile" />
			<TheAboutAdvantage />
			<TheAboutLinks />
		</div>
	</main>
</template>
<script setup>
import AdBlock from 'src/components/AdBlock.vue';
import AboutDescription from 'src/components/AboutDescription.vue';
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