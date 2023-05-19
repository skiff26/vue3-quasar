<template>
	<q-breadcrumbs class="header gray" active-color="gray">
		<q-breadcrumbs-el label="Главная" to="/" />
		<q-breadcrumbs-el label="Услуги" to="/" />
		<q-breadcrumbs-el label="Заказ экспертизы" to="/" />
		<q-breadcrumbs-el label="Выбор эксперта" to="/" />
		<q-breadcrumbs-el label="Эксперт №1243" to="/" />
	</q-breadcrumbs>
	<main class="expert-info">
		<div class="expert-info__container">
			<h1 class="expert-info__title text-uppercase">Эксперт Иванов Александр Дмитриевич</h1>
			<div class="expert-info__content">
				<div class="expert-info__calendar" v-if="!isTablet">
					<div class="choose__calendar">
						<h3 class="choose__subtitle">Доступные даты экспертизы</h3>
						<div class="choose__calendar-block">
							<h4>Календарь</h4>
							<q-date v-model="date" :options="options" minimal />
						</div>
					</div>
				</div>
				<div class="expert-info__info info">
					<div class="info__block-mob" v-if="isMobile">
						<div class="info__block-body-mob">
							<div class="info__block-text-mob">Какая-то общая информация. Возможно возраст, опыт работы и т.д</div>
							<div class="info__block-image-mob"><img src="icons/avatar.svg" alt="Avatar"></div>
						</div>
						<div class="info__block-btn">
							<q-btn no-wrap color="secondary" class="text-weight-bold expert-info__doc" square icon="description"
								label="Сертификаты" />
						</div>
					</div>
					<div class="info__container">
						<div class="info__image" v-if="!isMobile"><img src="icons/avatar.svg" alt="Avatar"></div>
						<div class="info__text">
							<p>Ветеринар, или ветеринарный врач – это специалист, занимающийся лечением и профилактикой
								заболеваний животных. В его обязанности входит осмотр, оказание медицинской помощи, вакцинация,
								чипирование, проведение различных процедур и операций, а также консультирование клиентов по уходу и
								содержанию животных. Специализация. Обычно после обучения ветеринар получает диплом ветеринарного
								врача общего профиля.</p>
						</div>
					</div>
					<div class="info__additional-text" v-show="!isSmall">Он обладает общими знаниями, позволяющими ему проводить
						осмотр и лечить
						распространенных животных: как мелких домашних, так и крупный скот.</div>
				</div>
			</div>
			<InfoButtons :isMobile="isMobile" />
		</div>
	</main>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import InfoButtons from 'src/components/InfoButtons.vue'
const formatDate = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}/${month}/${day}`;
};
const date = ref(formatDate(new Date()))
const options = ref([])
const isSmall = ref(false)
const isTablet = ref(false)
const isMobile = ref(false)
const onResize = () => {
	isSmall.value = window.innerWidth < 853
	isTablet.value = window.innerWidth < 768
	isMobile.value = window.innerWidth < 540
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