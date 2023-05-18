<template>
	<article class="order__ad ad">
		<div class="ad__container" v-if="!isMobile">
			<div class="ad__num">Объявление <span>№34829</span></div>
			<div class="ad__body">
				<div class="ad__image"><img src="/order/dog.png" alt="Dog"></div>
				<div class="ad__text">
					<h2 class="ad__title text-uppercase">Продается собака породы Венгерский Кувас</h2>
					<div class="ad__add">
						<span>Добавлено: </span>
						<time>23 января 2023 года</time>
					</div>
					<div class="ad__city">
						<span>Город: </span>
						<address>Москва</address>
					</div>
					<div class="ad__breed">Порода: <span>Кувас</span></div>
					<div class="ad__seller">Продавец: <span>Иванов Степан</span></div>
				</div>
			</div>
		</div>
		<div class="ad__container-mob" v-else>
			<div class="ad__body-mob">
				<div class="ad__text-mob">
					<div>23 января 2023 года</div>
					<address>Москва</address>
					<div>Порода: <span>Кувас</span></div>
					<div>Продавец: <span>Иванов Степан</span></div>
				</div>
				<div class="ad__image-mob">
					<img src="/order/dog.png" alt="Dog">
				</div>
			</div>
			<h3 class="ad__title-mob text-uppercase">Продается собака породы Венгерский Кувас</h3>
		</div>
	</article>
</template>
<script setup>
defineProps(['isMobile'])
</script>