<template>
	<q-breadcrumbs class="header gray" active-color="gray">
		<q-breadcrumbs-el label="Главная" to="/" />
		<q-breadcrumbs-el label="Услуги" to="/" />
		<q-breadcrumbs-el label="Заказ экспертизы" to="/" />
	</q-breadcrumbs>
	<main class="order">
		<div class="order__container">
			<h1 class="order__title text-uppercase">Заказ Экспертизы</h1>
			<OrderAd :isMobile="isMobile" />
			<OrderAdept :isMobile="isMobile" />
			<section class="order__form form">
				<div class="form__container">
					<h2 class="form__title text-uppercase" v-if="!isMobile">Заполните -форму для формирования заявки эксперту
					</h2>
					<h2 class="form__title text-uppercase" v-else>Заполните форму для формирования заявки (3 шага)</h2>
					<div class="form__body">
						<div class="form__header" v-if="!isMobile">
							<div class="form__header-item" :class="{ active: index === activeId }"
								v-for="(item, index) in  headerItems " :key="item">{{ item }}
							</div>
						</div>
						<div class="form__header-mob" v-else>
							<div class="form__header-mob-stage">Шаг {{ currentStage }}</div>
							<div class="form__header-item active">{{ headerItems[activeId] }}</div>
						</div>
						<div class="form__content">
							<FormAlert />
							<div class="form__feilds fields" v-if="activeId === 0">
								<div class="fields__container">
									<div class="fields__item">
										<div class="fields__label">Заголовок объявления<span>*</span></div>
										<q-input outlined square v-model="form.title" label="Продается Собака">
											<template v-slot:append>
												<q-avatar>
													<q-icon name="info_outline" size="24px" />
												</q-avatar>
											</template>
										</q-input>
									</div>
									<div class="fields__item">
										<div class="fields__label">Вид питомца<span>*</span></div>
										<q-select outlined v-model="form.kind" :options="kinds" label="Выберите вид животного" />
									</div>
									<div class="fields__item">
										<div class="fields__label">Порода<span>*</span></div>
										<q-select outlined v-model="form.breed" use-input :label="breedLabel" :options="breeds">
											<template v-slot:no-option>
												<q-item>
													<q-item-section class="text-grey">
														No results
													</q-item-section>
												</q-item>
											</template>
										</q-select>
									</div>
									<div class="fields__item">
										<div class="fields__label">Группа к которой относится порода</div>
										<q-select outlined v-model="form.group" :options="groupsBreeds" label="Выберите группу" />
									</div>
									<div class="fields__item">
										<div class="fields__label">Размер породы</div>
										<q-select outlined v-model="form.size" :options="dogSizes" :label="groupLabel" />
									</div>
								</div>
							</div>
							<div class="form__fields-details details" style="height: 500px;" v-if="activeId === 1">
								Пункт 2
							</div>
							<div class="form__fields-media media" style="height: 500px;" v-if="activeId === 2">
								Пункт 3
							</div>
							<div class="form__navigation">
								<q-btn style="background: goldenrod; color: white;" class="text-weight-bold" square label="Назад"
									:class="{ invisible: activeId === 0 }" @click="prevStage" />
								<q-btn color="secondary" class="text-weight-bold" :class="{ invisible: activeId === 2 }" square
									label=" Далее" @click="nextStage" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>
<script setup>
import OrderAd from 'src/components/OrderAd.vue'
import FormAlert from 'src/components/FormAlert.vue'
import OrderAdept from 'src/components/OrderAdept.vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)
const isSmall = ref(false)

const headerItems = ['Категория и порода', 'Детальные характеристики', 'Фото и видео']
let activeId = ref(0)

const kinds = [
	'Кот', 'Собака'
]

const breeds = [
	'Овчарка', 'Австралийский келпи', 'Американская акита', 'Американский бульдог'
]

const groupsBreeds = [
	'Пастушьи и скотогонные собаки', 'Терьеры', 'Легавые'
]

const dogSizes = [
	'Очень маленькие', 'Маленькие ', 'Средние ', 'Большие', 'Очень большие'
]

const currentStage = computed(() => activeId.value + 1)

const nextStage = () => activeId.value++
const prevStage = () => activeId.value--

const breedLabel = computed(() => {
	return isSmall.value ? 'Выберите породу' : 'Выберите породу из списка или укажите другое название'
})
const groupLabel = computed(() => {
	return isSmall.value ? 'Выберите группу' : 'Выберите группу, к которой отнисится ваше животное'
})

const form = ref({
	title: '',
	kind: '',
	breed: '',
	group: '',
	size: ''
})

const onResize = () => {
	isMobile.value = window.innerWidth < 425
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
<style lang="scss" scoped>
.header {
	@media (max-width: 470px) {
		height: 50px;
		padding: 5px 0px;
	}
}
</style>