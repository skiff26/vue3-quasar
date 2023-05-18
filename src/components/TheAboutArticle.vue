<template>
	<section class="main__article article">
		<div class="article__container">
			<div class="article__left" v-if="!isSmall">
				<img src="/about/left.png" alt="Image 1">
			</div>
			<div class="article__right">
				<h3 class="article__title">Уникальная онлайн платформа по продаже животных</h3>
				<div class="article__image top" :class="{ top: isMobile }" v-if="isSmall">
					<img src="/about/topMobile.png" alt="Image 1" v-if="isMobile">
					<img src="/about/left.png" alt="Image 1" v-else>

				</div>
				<p class="article__text">Наши коллекции отличаются лаконичным дизайном, качественными материалами
					и удобными фасонами разных размеров и форм. Мы фокусируемся на комфорте и создаем одежду, в которой
					вы можете быть собой. Наша одежда не акцентирует внимание на себе, а лишь подчеркивает достоинства
					вашей фигуры.</p>
				<div class="article__image">
					<img src="/about/center.png" alt="Image 2">
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
defineProps(['isSmall', 'isMobile'])
</script>