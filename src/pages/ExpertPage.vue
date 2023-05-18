<template>
	<nav class="header">
		<div class="nav"><a href="#">Главная</a> / <a href="#">Услуги </a>/ <a href="#">Заказ экспертизы</a> / <a
				href="#">Выбор эксперта </a></div>
		<div class="nav-mobile"><a href="#">Главная</a> / <a href="#">Услуги </a>/ <a href="#">Заказ экспертизы</a> / <a
				href="#">Выбор эксперта </a></div>
	</nav>
	<main class="expert">
		<div class="expert__container">
			<h1 class="expert__title text-uppercase">Экспертная оценка животных</h1>
			<ExpertDescription />
			<div class="expert__choose choose">
				<div class="choose__container">
					<h2 class="choose__title text-uppercase">Выбор эксперта</h2>
					<div class="choose__body">
						<div class="choose__calendar" v-if="!isMobile">
							<h3 class="choose__subtitle">Выберите дату экспертизы</h3>
							<div class="choose__calendar-block">
								<h4>Календарь</h4>
								<q-date v-model="date" :options="options" minimal />
							</div>
						</div>
						<div div class=" choose__main">
							<ExpertSelectCity />
							<div class="choose__calendar-mob" v-if="isMobile">
								<h3 class="choose__subtitle">Выберите дату</h3>
								<q-input v-model="date" mask="date" outlined square :rules="['date']">
									<template v-slot:append>
										<q-icon name="event" class="cursor-pointer">
											<q-popup-proxy cover transition-show="scale" transition-hide="scale">
												<q-date v-model="date" minimal :options="options">
													<div class="row items-center justify-end">
														<q-btn v-close-popup label="Close" color="primary" flat />
													</div>
												</q-date>
											</q-popup-proxy>
										</q-icon>
									</template>
								</q-input>
							</div>
							<TheExperts :isSmall="isSmall" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
<script setup>
import TheExperts from 'src/components/TheExperts.vue';
import ExpertSelectCity from 'src/components/ExpertSelectCity.vue';
import ExpertDescription from 'src/components/ExpertDescription.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue'

const formatDate = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}/${month}/${day}`;
};

const date = ref(formatDate(new Date()))
const options = ref([])

const isSmall = ref(false)
const isMobile = ref(false)


const onResize = () => {
	isSmall.value = window.innerWidth < 788
	isMobile.value = window.innerWidth < 470
}

onMounted(() => {
	onResize()
	window.addEventListener('resize', onResize)

	const currentDate = new Date();

	while (options.value.length < 20) {
		const formattedDate = formatDate(currentDate);
		options.value.push(formattedDate);

		currentDate.setDate(currentDate.getDate() + 1);
	}
});
onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
})
</script>
<style scoped lang="scss">
.header {
	@media (max-width: 375px) {
		height: 50px;
		padding: 10px 10px;
	}
}

.nav-mobile {
	@media (max-width: 375px) {
		a {
			font-size: 10px;
			line-height: 12px;
		}
	}
}

.material-symbols-outlined {
	font-variation-settings:
		'FILL' 0,
		'wght' 200,
		'GRAD' 0,
		'opsz' 48
}
</style>