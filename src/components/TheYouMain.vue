<template>
	<main class="main">
		<div class="main__container">
			<h1 class="main__title text-center text-uppercase">Ваш личный кабинет</h1>
			<h2 class="main__from text-center">На сайте с: <time>22 мар. 2023 г</time></h2>
			<div class="main__table table">
				<div class="table__item">
					<h3 class="table__text">Подтверждение E-mail</h3>
					<q-btn color="secondary" class="text-weight-bold" label="Подтвердить" />
				</div>
				<div class="table__item checked">
					<h3 class="table__text">Подтверждение номера телефона</h3>
					<div class="table__status">
						<img src="/icons/check.svg" width="23" height="23" alt="Check">
						<span class="text-uppercase">Выполнено</span>
					</div>
				</div>
				<div class="table__item">
					<h3 class="table__text">Данные профиля</h3>
					<q-btn color="secondary" class="text-weight-bold" label="Мои данные" />
				</div>
				<div class="table__item">
					<h3 class="table__text">Разместить объявление</h3>
					<q-btn color="amber-9" class="text-weight-bold" :label="add" />
				</div>
			</div>
		</div>
	</main>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const isSmall = ref(false)
const add = computed(() => {
	return isSmall.value ? "Разместить" : "Создать объявление"
})
const onResize = () => {
	isSmall.value = window.innerWidth < 769
}

onMounted(() => {
	onResize()
	window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
})
</script>